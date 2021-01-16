/**
 * check if the build-time environment variable is anything other than 'production'
 * NOTE: you should try to use the debug flag in the configuration before this function
 *
 * the NODE_ENV environment variable is set by the react-scripts start/build scripts during transpilation to achieve pseudo environment variables
 *
 * SOURCE: https://create-react-app.dev/docs/adding-custom-environment-variables/
 * SOURCE: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js
 * @returns {boolean} -
 */
export const inDevBuildEnv = () => process.env.NODE_ENV !== 'production';

export const debugLog = (message: any, optionalParams?: any) => {
    if (inDevBuildEnv()) {
        // eslint-disable-next-line no-console
        console.log(message, optionalParams);
    }
};

export const debugLogError = (message: string, error: Error) => {
    if (inDevBuildEnv()) {
        // eslint-disable-next-line no-console
        console.error(message, error);
    }
};

export const debugLogGroup = (label: string, contents: () => void, collapsed = false) => {
    if (inDevBuildEnv()) {
        if (collapsed) {
            // eslint-disable-next-line no-console
            console.groupCollapsed(label);
        } else {
            // eslint-disable-next-line no-console
            console.group(label);
        }

        contents();

        // eslint-disable-next-line no-console
        console.groupEnd();
    }
};
