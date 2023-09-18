import { StatusBar } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function ViewText() {
    const navigation = useNavigation()
  return (
    <Animatable.View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.title}>Error 404</Text>
            <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={ ()=> navigation.navigate('ErrorU')}
            >
              <Text style={styles.textRegister}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title}>Error 124</Text>
            <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={ ()=> navigation.navigate('ErrorD')}
            >
              <Text style={styles.textRegister}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container3}>
            <Text style={styles.title}>Error 432</Text>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.textRegister}>error</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container4}>
        <TouchableOpacity 
            style={styles.button}
            onPress={ ()=> navigation.navigate('TelaInicial')}
            >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
    </Animatable.View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 5,
    backgroundColor: '#fff',
    marginStart: '5%'
  },
  container2: {
    flex: 4,
    backgroundColor: '#fff',
    marginStart: '5%'
  },
  container3: {
    flex: 3,
    backgroundColor: '#fff',
    marginStart: '5%'
  },
  container4: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0F2540',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  title:{
    fontSize: 24,
    marginTop: 28,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: '5%',
    alignItems: 'center',
  },
  textRegister: {
    fontSize: 16,
    width: '30%',
    backgroundColor: '#FBF1BA',
    textAlign: 'center',
    borderRadius: 20
  }
});