import { useContext } from 'react'
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { colores } from "../theme/appTheme"
import { AuthContex } from "../context/AuthContext"


interface Props{
    iconName: string,

}

export const TouchableIcon = ({ iconName }: Props) => {


    const { changeFavoriteIcon } = useContext(AuthContex)

    return (
        <TouchableOpacity
        onPress={() => changeFavoriteIcon(iconName)}>
            <Icon name={iconName} size={60} color={colores.primary} />
        </TouchableOpacity>
    )
}
