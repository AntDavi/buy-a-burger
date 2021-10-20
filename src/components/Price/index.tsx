import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
    price: string;
}

export function Price({ price } : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          { price }
      </Text>
    </View>
  );
}


