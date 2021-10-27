import React from 'react';

import Home from './src/pages/Home';
import Payment from './src/pages/cardCredit';
import AppLoading from 'expo-app-loading';

import {Routes} from './src/routes'

import { useFonts } from 'expo-font';
import { RobotoMono_400Regular, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono'

export default function App() {

  const [fontsLoaded] = useFonts ({
    RobotoMono_400Regular,
    RobotoMono_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Routes />
  );
  
} 