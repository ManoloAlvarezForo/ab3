/* eslint-disable react/react-in-jsx-scope */
import Ionicons from '@react-native-vector-icons/ionicons';
import {PropsWithChildren, useState} from 'react';
import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';

import {ThemedView} from './ThemedView';
import {Colors} from '../constants/Colors';
import {Text} from 'react-native-paper';

export function Collapsible({
  children,
  title,
}: PropsWithChildren & {title: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen(value => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <Text variant="titleMedium">{title}</Text>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
