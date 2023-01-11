import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: 'signIn'}
    | { type: 'logOut', payload: AuthState}
    | { type: 'changeFavIcon', payload: string}
    | { type: 'username-put', payload: string }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'signIn':

            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
            break;
    
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logOut':
            return {
                ...state,
                ...action.payload
            }

        case 'username-put':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state
    }




}