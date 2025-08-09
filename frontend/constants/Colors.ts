/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#';
const tintColorDark = '#68a5e6ff';

export const Colors = {
  light: {
    text: '#11181C',
    textSecondary: '#5476A1',
    backgroundSecondary: '#fff',
    background: '#C8D2E6',
    backgroundTertiary: '#dfdfdfff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    placeholder: '#555', // dark gray for light theme,
    border: '#cccccc', // light border for light theme
    textDim: '#555555', // dimmed text color for light theme
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#ffffff', 
    background: '#151718',
    backgroundSecondary: '#232323ff',
    backgroundTertiary: '#333333',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    placeholder: '#bebebeff', // light gray for dark theme
    border: '#444444', // dark border for dark theme
    textDim: '#9BA1A6', // dimmed text color for dark theme
  },
};
