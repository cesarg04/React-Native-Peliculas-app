import React, { createContext, useReducer } from "react";
import { authReducer } from "./Authreducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string
    favoriteIcon?: string
}


// Estado incial

export const AuthInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}


// Lo usaremos para decirle React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    updateUsername: (name: string) => void;
}


// Crear el context

export const AuthContex = createContext({} as AuthContextProps)


// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, AuthInitialState)

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logOut', payload: AuthInitialState })
    }

    const updateUsername = (name: string) => {
        dispatch({ type: 'username-put', payload: name })
    }

    return (
        <AuthContex.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            updateUsername
        }} >
            {children}
        </AuthContex.Provider>
    )
}



