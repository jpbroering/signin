import { StatusBar } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function TelaInicial() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image source={require('../../assets/Union.png')} style={styles.stretch}/>
        </View>
        <Animatable.View
        delay={800} 
        animation='fadeInUp'
        style={styles.containerForm}>
        <Text style={styles.title}>App</Text>
        <Text style={styles.message}>Para ver sua função clique no botão abaixo</Text>
        <View style={styles.containerExit}>
          <TouchableOpacity 
            style={styles.button}
            onPress={ ()=> navigation.navigate('ViewName')}
            >
            <Text style={styles.buttonText}>Função</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F2540',
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 20,
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    marginTop: 28,
    fontWeight: 'bold'
  },
  pagText:{

  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#0F2540',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  textRegister: {
    color: '#a1a1a1'
  },
  containerExit: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginTop: '15%',
    marginBottom: '8%'
  },
  stretch: {
    width: '90%',
    resizeMode: 'contain'
  }
});
