import React, { createContext, useCallback, useState } from 'react';
import { fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
};


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);

    const login = async(email, password) => {
        const resp = await fetchSinToken('login', { email, password }, 'POST');
        
        const { usuario } = resp;
        console.log(usuario);

        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email
            });
            
            console.log('autenticado');
        }
        return resp.ok;
    }

    const register = (nombre, email, password) => {

    }
    //TODO: ponerlo en un useEffect
    const verificarToken = useCallback( () => {

    }, []);

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificarToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
