import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 500 ? 'permanent' : 'front'
      }}
      drawerContent={ (props) => <MenuInterno {...props} /> }>
      <Drawer.Screen name="Tabs" options={{ title: 'Tabs' }}  component={Tabs} />
      <Drawer.Screen name="Article" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return(
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarCVontainer } >
        <Image source={{
          uri: 'https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
        }} 
        style={ styles.avatar }/>
      </View>

      {/* Opciones del menu */}
      
      <View style={ styles.menuContainer } >

        <TouchableOpacity style={ styles.menuBoton } 
        onPress={ () => navigation.navigate('Tabs') } >
          <Text style={ styles.menuTexto } >Tabs</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={ styles.menuBoton } 
        onPress={ () => navigation.navigate('Article') } >
          <Text style={ styles.menuTexto } >Ajustes</Text>
        </TouchableOpacity>


      </View>

    </DrawerContentScrollView>
  )
}