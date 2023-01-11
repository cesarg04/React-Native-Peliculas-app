import { FC, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {

}

export const Pagina1Screen: FC<Props> = ({ navigation }) => {

  useEffect(() => {
    
    navigation.setOptions({
      headerLeft: () => <Button 
                          title='menu' 
                          onPress={navigation.toggleDrawer}/>
    })
    
  }, [])
  


  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title} >Pagina1Screen</Text>
      <Button
        title='Ir pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')} />

      <Text>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
                  ...styles.botonGrande,
                  backgroundColor: '#5856D6'
                }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'pedro'
          })}>
          <Text style={ styles.botonGrandeTexto } >Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'maria'
          })}>
          <Text style={ styles.botonGrandeTexto } >Maria</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
