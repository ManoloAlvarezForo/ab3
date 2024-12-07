/* eslint-disable react/react-in-jsx-scope */
import {View, type ViewProps} from 'react-native';

import {useTheme} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  isSafeAreaView?: boolean;
};

export function ThemedView({
  style,
  isSafeAreaView = false,
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();
  const backgroundColor = theme.colors.background;

  const returnedView = isSafeAreaView ? <SafeAreaView style={[{backgroundColor}, style]} {...otherProps} /> : <View style={[{backgroundColor}, style]} {...otherProps} />;

  return returnedView;
}
