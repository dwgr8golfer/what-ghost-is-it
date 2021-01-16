import { Action, applyMiddleware, combineReducers, compose, createStore, MiddlewareAPI } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';
import ThemeReducer, { IThemeSliceState } from '../features/theme';
import { debugLog, debugLogError, debugLogGroup } from '../libs/utilities';
import { compareObjects } from '../libs/utilities/RamdaCookbook';
import {IConfigurationModelState} from "../features/configuration/ConfigurationDuck";
import ConfigurationReducer from '../features/configuration';

export const inDevBuildEnv = (): boolean => process.env.NODE_ENV !== 'production';

export type AppState = {
    Theme: IThemeSliceState;
    Configuration: IConfigurationModelState;
}

const Reducers = combineReducers({
    Theme: ThemeReducer,
    Configuration: ConfigurationReducer
});

const logger = ({ getState }: MiddlewareAPI) => (next: Function) => (action: Action) => {
    const previousState = getState();

    const result = next(action);

    debugLogGroup(`dispatched: ${action.type}`, () => {
        const nextState = getState();
        const comparison = compareObjects(previousState, nextState);

        debugLog('action', action);
        debugLog('next state', nextState);
        debugLog('difference', comparison.difference);
    });

    return result;
};

const crashReporter = () => (next: Function) => (action: Action) => {
    try {
        return next(action);
    } catch (err) {
        debugLogError('Caught an exception!', err);
        throw err;
    }
};

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    debug: inDevBuildEnv()
};

const persistedReducer = persistReducer(persistConfig, Reducers);
const windowWithType: any = window;
const composeEnhancers = windowWithType.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose; // for the redux dev tools

const configureStore = () => {
    const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, crashReporter, logger));
    const store = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store);

    return {
        Store: store,
        Persistor: persistor
    };
};

export default configureStore;
