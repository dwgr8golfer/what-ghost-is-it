import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../../store/configureStore';

const AppStoreProvider: React.FunctionComponent = ({
                                                       children
                                                   }) => {
    const {
        Store,
        Persistor
    } = useMemo(() => configureStore(), []);

    return (
        <Provider store={Store}>
            <PersistGate
                loading={null}
                persistor={Persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    );
};

export default AppStoreProvider;