import error from '@material-ui/core/colors/red';
import { IThemeOptions } from './types';

// THEME CONSTANTS
const BACKGROUND = '#EEEEEE';

const BORDER_RADIUS = 8;

// make this 16 and recalc font rems
const FONT_SIZE = 16;

const FONT_WEIGHT = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900
};

const PAPER = {
    main: '#ffffff88', // 50% opacity of white // design theme uses '#F0F3F5',
    light: '#FFFFFF',
    dark: '#EEEEEE'
};

const METAL = {
    main: '#2A2C30',
    light: '#4E5259',
    dark: '#101112'
};

const LINE_SEPARATOR_GREY = '#DFDFDF';

// DEFAULT THEME OPTIONS
const options: IThemeOptions = {
    themeId: 'default',
    typography: {
        fontFamily: '"Roboto", "Barlow", "Helvetica", "Arial", sans-serif',
        fontSize: FONT_SIZE,
        htmlFontSize: FONT_SIZE,
        fontWeightLight: FONT_WEIGHT.light,
        fontWeightRegular: FONT_WEIGHT.regular,
        fontWeightMedium: FONT_WEIGHT.medium,
        fontWeightSemiBold: FONT_WEIGHT.semiBold, // this is custom property, material-ui won't use it by default
        fontWeightBold: FONT_WEIGHT.bold,
        fontWeightBlack: FONT_WEIGHT.black, // also custom
        h1: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '2.125rem',
            fontStyle: 'italic',
            letterSpacing: 2
        },
        h2: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.5rem',
            fontStyle: 'italic'
        },
        h3: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.3125rem',
            fontStyle: 'italic'
        },
        h4: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.125rem',
            fontStyle: 'italic'
        },
        h5: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1rem',
            fontStyle: 'italic'
        },
        h6: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '0.875rem',
            fontStyle: 'italic'
        },
        body1: {
            fontWeight: FONT_WEIGHT.regular,
            fontSize: '1rem'
        },
        body2: {
            fontWeight: FONT_WEIGHT.regular,
            fontSize: '.875rem'
        },
        subtitle1: {
            fontWeight: FONT_WEIGHT.semiBold,
            fontStyle: 'italic',
            fontSize: '.875rem'
        },
        subtitle2: {
            fontWeight: FONT_WEIGHT.medium,
            fontSize: '0.875rem',
            fontStyle: 'italic'
        },
        button: {
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: '1rem',
            textTransform: 'uppercase'
        },
        caption: {
            fontWeight: FONT_WEIGHT.medium,
            fontSize: '0.75rem'
        },
        overline: {
            fontWeight: FONT_WEIGHT.bold,
            fontSize: '.75rem',
            textTransform: 'uppercase'
        }
    },
    shadows: [
        'none',
        '0 1px 1px 0 rgba(0,0,0,0.04), 0 2px 1px -1px rgba(0,0,0,0.04), 0 1px 3px 0 rgba(0,0,0,0.1)',
        '0 2px 2px 0 rgba(0,0,0,0.04), 0 3px 1px -2px rgba(0,0,0,0.04), 0 1px 5px 0 rgba(0,0,0,0.1)',
        '0 3px 4px 0 rgba(0,0,0,0.04), 0 3px 3px -2px rgba(0,0,0,0.04), 0 1px 8px 0 rgba(0,0,0,0.1)',
        '0 4px 5px 0 rgba(0,0,0,0.04), 0 1px 10px 0 rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.1)',
        '0 6px 10px 0 rgba(0,0,0,0.04), 0 1px 18px 0 rgba(0,0,0,0.04), 0 3px 5px -1px rgba(0,0,0,0.1)',
        '0 8px 10px 1px rgba(0,0,0,0.04), 0 3px 14px 2px rgba(0,0,0,0.04), 0 5px 5px -3px rgba(0,0,0,0.1)',
        '0 9px 12px 1px rgba(0,0,0,0.04), 0 3px 16px 2px rgba(0,0,0,0.04), 0 5px 6px -3px rgba(0,0,0,0.1)',
        '0 12px 17px 2px rgba(0,0,0,0.04), 0 5px 22px 4px rgba(0,0,0,0.04), 0 7px 8px -4px rgba(0,0,0,0.1)',
        '0 16px 24px 2px rgba(0,0,0,0.04), 0 6px 30px 5px rgba(0,0,0,0.04), 0 8px 10px -5px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)',
        '0 24px 38px 3px rgba(0,0,0,0.04), 0 9px 46px 8px rgba(0,0,0,0.04), 0 11px 15px -7px rgba(0,0,0,0.1)'
    ],
    shape: {
        borderRadius: BORDER_RADIUS
    },
    palette: {
        type: 'light',
        primary: {
            main: '#FA0A1E'
        },
        secondary: {
            main: PAPER.dark
        },
        error: {
            main: error['500']
        },
        warning: {
            main: '#FFEB19',
            light: '#FFFDE8'
        },
        info: {
            main: '#1E92F0',
            dark: '#001E6E',
            light: '#E5E8F0'
        },
        success: {
            main: '#004BC3',
            light: '#F2F6FC'
        },
        paper: {
            light: PAPER.light,
            main: PAPER.main,
            dark: PAPER.dark
        },
        metal: {
            light: METAL.light,
            main: METAL.main,
            dark: METAL.dark
        },
        background: {
            paper: PAPER.light,
            default: BACKGROUND
        },
        lineColor: LINE_SEPARATOR_GREY
    }
};

export const defaultTheme = options;
export const darkTheme: IThemeOptions = {
    ...defaultTheme,
    typography: {
        ...defaultTheme.typography,
        h1: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '2.125rem',
            fontStyle: 'italic',
            letterSpacing: 2
        },
        h2: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.5rem',
            fontStyle: 'italic'
        },
        h3: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.3125rem',
            fontStyle: 'italic'
        },
        h4: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1.125rem',
            fontStyle: 'italic'
        },
        h5: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '1rem',
            fontStyle: 'italic'
        },
        h6: {
            fontWeight: FONT_WEIGHT.black,
            fontSize: '0.875rem',
            fontStyle: 'italic'
        },
        body1: {
            fontWeight: FONT_WEIGHT.regular,
            fontSize: '1.125rem'
        },
        body2: {
            fontWeight: FONT_WEIGHT.regular,
            fontSize: '1rem'
        },
        subtitle1: {
            fontWeight: FONT_WEIGHT.medium,
            fontSize: '1rem'
        },
        subtitle2: {
            fontWeight: FONT_WEIGHT.bold,
            fontSize: '0.875rem'
        },
        button: {
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: '1rem',
            textTransform: 'uppercase'
        },
        caption: {
            fontWeight: FONT_WEIGHT.medium,
            fontSize: '0.75rem'
        },
        overline: {
            fontWeight: FONT_WEIGHT.bold,
            fontSize: '0.75rem',
            textTransform: 'uppercase'
        }
    },
    palette: {
        ...defaultTheme.palette,
        type: 'dark',
        primary: {
            main: '#E40000'
        },
        secondary: {
            main: '#FA0A1E'
        },
        error: {
            main: error['500']
        },
        background: {
            paper: '#141414',
            default: '#141414'
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                '&$focused': {
                    color: '#FFFFFF'
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                '&$focused $notchedOutline': {
                    borderColor: '#FFFFFF'
                }
            }
        }
    }
};
