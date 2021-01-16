import React, { StrictMode } from 'react';
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import { RootPath } from './constants/navigation';
import AppConfigurationProvider from './providers/app-configuration-provider';
import AppStoreProvider from './providers/app-store-provider';
import AppThemeProvider from './providers/app-theme-provider';
import NotFound from './screens/not-found-screen';

const App = (): JSX.Element => (
    <StrictMode>
        <AppRouter>
            <AppStoreProvider>
                <AppThemeProvider themeType={'light'}>
                    <AppConfigurationProvider>
                        <Switch>
                            {/*<Route*/}
                            {/*    exact={true}*/}
                            {/*    path={[LoginScreenPath, RootPath]}*/}
                            {/*>*/}
                            {/*    <Login />*/}
                            {/*</Route>*/}
                            <Route
                                path={'*'}
                                status={404}
                            >
                                <NotFound />
                            </Route>
                        </Switch>
                    </AppConfigurationProvider>
                </AppThemeProvider>
            </AppStoreProvider>
        </AppRouter>
    </StrictMode>
);

export default App;
