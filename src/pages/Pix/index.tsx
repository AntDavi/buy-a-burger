import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles';
import { Button } from '../../components/Button'

export default function App() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = () => {
    Clipboard.setString('Sua chave Pix');
    Alert.alert('A chave foi copiada, use para pagar no seu banco!')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pague através do{"\n"}
        Pix
      </Text>
        
      <Button 
        title="PIX Copia e Cola"
        onPress={copyToClipboard}
        
      />
    </View>
  );
}

