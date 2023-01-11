import { StyleSheet } from "react-native";


export const colores = {

  primary: '#5956D6',
  // secondary: ''

}

export const styles = StyleSheet.create({
   globalMargin: {
    marginHorizontal: 20
   },
   title: {
    fontSize: 30,
    marginBottom: 10
   },
    botonGrande: {
      width: 100,
      height: 100,
      backgroundColor:'red',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20
    },
    botonGrandeTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    avatarCVontainer: {
      alignItems: 'center'
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    menuContainer: {
      marginVertical: 30,
      marginHorizontal: 50,
    },
    menuBoton:{
      marginVertical: 10,
    },
    menuTexto:{
      fontSize: 20,

    }
});