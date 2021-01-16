import ThemeDuck, { SliceState } from './ThemeDuck';
import ThemeModel, { IThemeModel as ModelType } from './ThemeModel';

const ThemeReducer = ThemeDuck.Reducer;

export default ThemeReducer;
export { ThemeDuck, ThemeModel };
export type IThemeSliceState = SliceState;
export type IThemeModel = ModelType;
