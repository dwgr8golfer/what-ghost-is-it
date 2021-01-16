import { Theme, ThemeOptions } from '@material-ui/core';
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Typography, TypographyOptions } from '@material-ui/core/styles/createTypography';

type IPaletteColor = {
    main: string;
    light: string;
    dark: string;
};

interface IPalette extends Palette {
    paper: IPaletteColor;
    metal: IPaletteColor;
    lineColor: string;
}

interface ITypography extends Typography {
    fontWeightSemiBold: number;
    fontWeightBlack: number;
}

export interface ITheme extends Theme {
    themeId: string;
    palette: IPalette;
    typography: ITypography;
}

interface IPaletteOptions extends PaletteOptions {
    paper?: Partial<IPaletteColor>;
    metal?: Partial<IPaletteColor>;
    lineColor?: string;
}
interface ITypographyOptions extends TypographyOptions {
    fontWeightSemiBold?: number;
    fontWeightBlack?: number;
}

export interface IThemeOptions extends ThemeOptions {
    themeId: string;
    palette?: IPaletteOptions;
    typography?: ITypographyOptions;
}
