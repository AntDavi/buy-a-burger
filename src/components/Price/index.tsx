import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
    priceHam: number;
}

export function Price({ priceHam } : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          R$ { priceHam.toFixed(2)}
      </Text>
    </View>
  );
}


