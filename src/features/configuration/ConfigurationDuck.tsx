import { createModelSlice, IModelState, StatusEnum } from '@gjv/redux-slice-factory';
import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { getConfigurationAsync } from '../../data-sources/config';
import Configuration, { IConfiguration } from '../../models/configuration';
import { AppState } from '../../store/configureStore';
import { IDuck } from '../index';

export type IConfigurationModelState = IModelState<IConfiguration>;

const { name, reducer, actions, selectors } = createModelSlice<AppState, IConfiguration>({
    name: 'Configuration',
    selectSliceState: (appState) => appState.Configuration,
    initialState: {
        model: Configuration.create()
    }
});

const get = () => async (dispatch: Dispatch) => {
    dispatch(actions.setStatus(StatusEnum.Requesting));

    try {
        const configuration = await getConfigurationAsync();
        batch(() => {
            dispatch(actions.hydrate(configuration));
            dispatch(actions.setStatus(StatusEnum.Settled));
            dispatch(actions.setError(null));
        });
    } catch (error) {
        batch(() => {
            dispatch(actions.setStatus(StatusEnum.Failed));
            dispatch(actions.setError(error));
        });
    }
};

const allActions = {
    ...actions,
    get: get
};

const ConfigurationDuck: IDuck<IConfigurationModelState, typeof allActions, typeof selectors> = {
    Name: name,
    Reducer: reducer,
    Actions: allActions,
    Selectors: selectors
};

export default ConfigurationDuck;
