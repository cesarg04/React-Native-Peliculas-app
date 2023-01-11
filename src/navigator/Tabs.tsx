import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIos />
    : <TabsAndroid />
}



const BottomTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let inconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              inconName = 'desktop'
              break;

            case 'TopTabNavigator':
              inconName = 'flask'
              break;

            case 'StackNavigator':
              inconName = 'folder-open'
              break;

          }

          return <Icon name={inconName} size={40} color=""/>
        },
      })}>
      <BottomTabsAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottonTabIos.Screen name="TopTabNavigator" options={{ title: 'Tab' }} component={TopTabNavigator} />
      <BottomTabsAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabsAndroid.Navigator>
  );
}






const BottonTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottonTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {

            let inconName: string = '';

            switch (route.name) {
              case 'Tab1Screen':
                inconName = 'T1'
                break;

              case 'Tab2Screen':
                inconName = 'T2'
                break;

              case 'StackNavigator':
                inconName = 'St'
                break;

            }

            return <Text style={{ color }} >{inconName}</Text>
          },
          tabBarActiveTintColor: colores.primary,
          tabBarStyle: {
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarLabelStyle: {
            fontSize: 15
          },
        })


      }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
      <BottonTabIos.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottonTabIos.Screen name="TopTabNavigator" options={{ title: 'Tab' }} component={TopTabNavigator} />
      <BottonTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottonTabIos.Navigator>
  );
}