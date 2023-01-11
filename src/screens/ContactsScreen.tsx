import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { useContext } from 'react'
import { AuthContex } from '../context/AuthContext'


export const ContactsScreen = () => {

  const { signIn, authState } = useContext(AuthContex)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} >ContactsScreen </Text>
      {
        !authState.isLoggedIn && <Button
          title='SignIn'
          onPress={() => signIn()} />
      }

    </View>
  )
}
