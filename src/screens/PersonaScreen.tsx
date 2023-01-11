import { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContex } from '../context/AuthContext';

// interface RouteParms{
//   id: number,
//   nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: Props) => {
  // console.log(props);

  const { updateUsername } = useContext(AuthContex)

  const params = route.params;

  useEffect(() => {

    navigation.setOptions({
      title: params!.nombre
    })

  }, [])

  useEffect(() => {

    updateUsername(params.nombre)

  }, [])



  return (
    <View style={styles.globalMargin} >

      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
