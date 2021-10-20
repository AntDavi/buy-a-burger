import React from 'react';

import Home from './src/pages/Home';
import Payment from './src/pages/Payment';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

import { RobotoMono_400Regular, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono'

export default function App() {

  const fonts = useFonts ({
    RobotoMono_400Regular,
    RobotoMono_700Bold
  });

  if(!fonts) {
    return <AppLoading/>
  }

  return (
    <Payment />
  );
}
