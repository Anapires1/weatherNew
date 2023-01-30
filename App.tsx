import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import reactotron from './reactotron';
import AuthProvider from './src/contexts/auth';
import Weather from './src/modules/weatherScreen/screens/weather';
import Routes from './src/navigation/Routes';
import { theme } from './src/theme';

export const App = () => {
  reactotron.createEnhancer;
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
