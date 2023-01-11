import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colores, styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContex } from '../context/AuthContext';
import Icon from "react-native-vector-icons/Ionicons"


export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContex);



  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }} >
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon && (
          <Icon name={authState.favoriteIcon} size={100} color={colores.primary} />
        )
      }

    </View>
  )
}
