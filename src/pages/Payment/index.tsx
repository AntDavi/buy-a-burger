import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

import { PayButton } from '../../components/paymentButton'
import { Button } from '../../components/Button'

export default function Payment() {
  const navigation = useNavigation();

  function handleCredit() {
    navigation.navigate('cardCredit');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>
        Escolha a forma{"\n"}
        de pagamento
      </Text>


      <View style={styles.buttonsContainer}>
        <PayButton
          title="Pix"
        />
        <PayButton
          title="Cartão"
          onPress={handleCredit}
        />
      </View>

    </View>
  );
}

