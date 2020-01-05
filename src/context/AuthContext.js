import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return{...state, token: action.payload}
        case 'add_error':
            return {errorMessage: '', errorMessage: action.payload};
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async ( { email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token })
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Could not signup.'})
        }
    }
}

const signin = (dispatch) => {
    return (email, password) => {

    }
}


const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signup, signout},
    { isSignedIn: null, errorMessage: '' }
);