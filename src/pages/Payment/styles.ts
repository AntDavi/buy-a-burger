import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2A2829',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 25,
      fontFamily: 'RobotoMono_700Bold',
      marginBottom: 50,
      textAlign: 'center',
      justifyContent: 'flex-start'
    },
    buttonsContainer: {
      height: 500,
      justifyContent: 'space-between'
    }
  });

export { styles };