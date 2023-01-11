import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useEffect } from 'react'

export const Pagina2Screen = () => {

  const navigator = useNavigation()

  useEffect(() => {
    
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'
    })

  }, [])
  

  return (
    <View>
        <Text style={ styles.title } >Pagina2Screen</Text>
        <Button
            title='Ir pagina 3'
            onPress={ () => navigator.navigate('Pagina3Screen') }/>
    </View>
  )
}
