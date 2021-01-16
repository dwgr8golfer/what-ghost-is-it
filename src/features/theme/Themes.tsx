import ThemeModel from './ThemeModel';

const OriginalTheme = ThemeModel.create({
    name: 'Original',
    type: 'light'
});

export {
    OriginalTheme as DefaultTheme,
    OriginalTheme
};
