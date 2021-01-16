import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { defaultTheme, darkTheme } from '../../themes/default';

interface IAppThemeProviderProps {
    themeType: 'dark' | 'light';
}
const AppThemeProvider: React.FunctionComponent<IAppThemeProviderProps> = ({ children, themeType }) => (
    <ThemeProvider theme={createMuiTheme(themeType === 'light' ? defaultTheme : darkTheme)}>
        <CssBaseline>
            {children}
        </CssBaseline>
    </ThemeProvider>
);

export default AppThemeProvider;