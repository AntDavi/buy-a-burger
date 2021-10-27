import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';
import InputSpinner from "react-native-input-spinner";

import { Price } from '../../components/Price'
import { Button } from '../../components/Button'

import Burger from '../../assets/image/Burger.png'

import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

export default function Home() {
  const navigation = useNavigation();

  function handlePay() {
    navigation.navigate('Payment');
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={Burger} />
      <Price price="R$ 13,00"/>

      <View style={styles.quantidade}>
        <InputSpinner
          max={20}
          min={1}
          step={1}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          skin={"modern"}
          onChange={(num) => {
            console.log(num);
          }}
        />
      </View>

      <Button 
        title="Comprar"
        onPress={handlePay}
      />

    </View>
  );
}

