/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ThemedView} from '../components/ThemedView';

export default function HomeScreen() {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}: any) => setState({open});
  const {open} = state;

  const revisitIcon = () => <IonIcon name="people" size={24} />;

  return (
    <ThemedView isSafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Text style={{fontWeight: 'bold'}} variant="headlineMedium">
          Ab3
        </Text>
      </ThemedView>
      <ThemedView>
        <Text>Lun 02 de Dic 2024</Text>
      </ThemedView>
      <ThemedView style={styles.centeredContainer}>
        <Text style={styles.centeredText}>No existen eventos</Text>
      </ThemedView>
      <FAB.Group
        open={open}
        visible
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          {
            icon: revisitIcon,
            label: 'Revisitas',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {}}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    color: '#000',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
