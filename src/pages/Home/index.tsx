import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

  const [value, setValue] = useState(1)
  const hamburgerPrice = 13

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={Burger} />
      <Price priceHam={value * hamburgerPrice} />

      <View style={styles.quantidade}>
        <InputSpinner
          max={10}
          min={1}
          step={1}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          skin={"modern"}
          onChange={(num: number) => {
            setValue(num)
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

