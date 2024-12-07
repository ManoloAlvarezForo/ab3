/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {ApolloProvider} from '@apollo/client';
import CustomBottomNavigation from './navigation/CustomBottomNavigation';
import {useApolloClient} from './hooks/useApolloClient';
import {CustomLightTheme} from './themes/theme';

export default function App() {
  const {client} = useApolloClient();

  if (!client) {
    return null;
  }

  return (
    <PaperProvider theme={CustomLightTheme}>
      <ApolloProvider client={client}>
        <CustomBottomNavigation />
      </ApolloProvider>
    </PaperProvider>
  );
}
