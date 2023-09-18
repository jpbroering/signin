import { StatusBar } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Animation } from "react-native-animatable";

export default function ErrorU(){
  const Navigation = useNavigation()
  return(
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Error 404</Text>
      </View>
      <View style={styles.containerForm}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat consectetur ex, a congue mauris efficitur eget. Integer tellus nibh, rhoncus fermentum nulla ac, hendrerit faucibus lacus. In malesuada egestas mauris, eget viverra libero posuere ut. Nam non nibh tincidunt, lacinia ligula a, fringilla quam. Vestibulum diam nisi, laoreet a finibus quis, imperdiet in ipsum. Sed tempor fringilla est, ut cursus diam condimentum porttitor. In pretium leo sed magna accumsan fermentum. Fusce ipsum massa, fringilla et arcu at, ultricies dapibus risus.
        </Text>
      <TouchableOpacity style={styles.button}>
        <Text onPress={()=>Navigation.navigate('ViewText')} style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHeader: {
    height: '20%',
    marginTop: '7%'
  },
  containerForm: {
    height: '80%',
    marginStart: '5%',
    marginEnd: '5%',
    alignItems: 'center'
  },
  text: {
    textAlign: 'justify'
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold'
  },
  button:{
    alignItems: "center",
    width: '30%',
    backgroundColor: '#0F2540',
    marginTop: '10%',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff'
  }
})