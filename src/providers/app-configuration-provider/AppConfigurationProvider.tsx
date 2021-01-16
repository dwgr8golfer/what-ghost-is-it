import { StatusEnum } from '@gjv/redux-slice-factory';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner';
import { ConfigurationDuck } from '../../features/configuration';

const AppConfigurationProvider: React.FunctionComponent = ({
                                                               children
                                                           }) => {
    const dispatch = useDispatch();

    const configuration = useSelector(ConfigurationDuck.Selectors.selectSliceState);
    const isLoading = configuration.status === StatusEnum.Requesting;

    useEffect(() => {
        if (!isLoading && !configuration.error && configuration.lastHydrated === null) {
            dispatch(ConfigurationDuck.Actions.get());
        }
    }, [configuration.error, configuration, isLoading, dispatch, configuration.lastHydrated]);

    return isLoading || configuration.lastHydrated === null
        ? (
            <Spinner
                message={'Loading configuration.'}
            />
        )
        : <React.Fragment>{children}</React.Fragment>;
};

export default AppConfigurationProvider;
