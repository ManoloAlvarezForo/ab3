import { MD3LightTheme as PaperLightTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import lightColors from './light.json';
// import darkColors from './dark.json';

export const CustomLightTheme = {
  ...PaperLightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...lightColors.colors,
  },
  fonts: PaperLightTheme.fonts, // Asegúrate de usar las fuentes MD3 originales
};
