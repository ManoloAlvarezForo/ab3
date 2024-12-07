/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {ThemedView} from '../components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView isSafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Text style={{fontWeight: 'bold'}} variant="headlineMedium">
          Welcome to Ab3!
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Text>Viernes 19 de Julio de 2024</Text>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
