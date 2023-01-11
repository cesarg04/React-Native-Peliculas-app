import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { color } from 'react-native-reanimated';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets()


  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let inconName: string = '';

            switch (route.name) {
              case 'ChatScreen':
                inconName = 'aperture'
                break;

              case 'ContactScreen':
                inconName = 'basket'
                break;

              case 'AlbumsScreen':
                inconName = 'albums'
                break;

            }

            return <Icon name={inconName} size={30} color={color}/>
          },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        }
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen}/>
      <Tab.Screen name="ContactScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}