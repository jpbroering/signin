import { StatusBar } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.title}>Confirme sua Senha</Text>
        <TextInput style={styles.input}/>

        <TouchableOpacity 
          style={styles.button}
          onPress={ ()=> navigation.navigate('BemVindo')}
          >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={ ()=> navigation.navigate('BemVindo')}
            >
          <Text style={styles.textRegister}>Possui Conta</Text>
        </TouchableOpacity>
      </View>
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
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
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
    fontSize: 20,
    marginTop: 28
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
  }
});
