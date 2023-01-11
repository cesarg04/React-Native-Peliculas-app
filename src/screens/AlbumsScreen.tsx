import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';
import { colores } from '../theme/appTheme';
import { AuthContex } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logOut, authState: { isLoggedIn } } = useContext(AuthContex)

  return (
    <View>
      <Text>AlbumsScreen</Text>
      {
        isLoggedIn && <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: colores.primary,
            width: 200,
            marginHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }}
          onPress={() => logOut()}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }} >Reset</Text>
        </TouchableOpacity>

      }

    </View>
  )
}
