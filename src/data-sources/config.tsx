import * as R from 'ramda';
import Logger from '../libs/logger';
import { inDevBuildEnv } from '../libs/utilities';
import Configuration, { IConfiguration } from '../models/configuration/Configuration';

const developmentConfigFileAsync = import('../config/config.Development.json');
const configFileAsync = import('../config/config.json');

let configuration: IConfiguration | null = null;

/**
 * fetch the config data from the data source
 * @returns {Promise<null|any>} -
 */
const fetchConfig = async (): Promise<any> => {
    if (inDevBuildEnv()) {
        const configFile = await configFileAsync;
        const developmentConfigFile = await developmentConfigFileAsync;
        return R.mergeDeepRight(configFile, developmentConfigFile);
    }

    const endpoint = '/config.json';
    const settings: RequestInit = {
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        redirect: 'follow',
        referrer: 'no-referrer'
    };

    const response = await fetch(endpoint, settings);
    return response.json();
};

/**
 * returns the configuration object for the current environment
 */
export const getConfigurationAsync = async (): Promise<IConfiguration> => {
    if (configuration !== null) {
        return configuration;
    }

    try {
        const data = await fetchConfig();
        configuration = Configuration.create(data);
    } catch (error) {
        Logger.logCritical('Error fetching configuration.', error);
        configuration = Configuration.create();
    } finally {
        Logger.logInformation('Configuration', configuration);
    }

    return configuration;
};
