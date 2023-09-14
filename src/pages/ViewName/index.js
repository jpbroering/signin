import { StatusBar } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function ViewName() {
    const navigation = useNavigation()
  return (
    <Animatable.View style={styles.container}>
        <View style={styles.container1}>

        </View>
        <View style={styles.container4}>
          <Text style={styles.title}>Termos de Uso</Text>
          <Animatable.Text delay={800} animation="fadeIn" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum enim ut erat commodo dictum. Cras dapibus nisi vel neque bibendum lobortis. Donec ex ante, accumsan sit amet urna eget, consequat hendrerit erat. Sed id tellus libero. Aliquam ac metus in nisl varius pharetra. Duis vestibulum pretium accumsan. Nulla porttitor lectus turpis, vitae faucibus purus rutrum id. Nullam purus justo, vestibulum vitae ex vel, posuere vulputate nisl. Nunc eu ligula cursus, facilisis nisl eget, interdum nulla. Fusce sit amet diam elit. Integer vel lacinia urna. Mauris interdum pretium molestie. Mauris ac elit hendrerit, gravida risus eget, mattis ex. Suspendisse vel urna risus. Praesent vitae venenatis leo. Quisque sagittis dui dolor, eget iaculis libero suscipit eget.</Animatable.Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={ ()=> navigation.navigate('ViewText')}
            >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
    </Animatable.View>
    );
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#0F2540',
      },
      container1: {
        marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
      },
      container4: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
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
      message: {
        fontSize: 20,
      },
      title:{
        fontSize: 24,
        marginTop: 28,
        fontWeight: 'bold'
      },
});