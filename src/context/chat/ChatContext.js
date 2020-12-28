import React, { useReducer } from 'react';
import { createContext } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //UID de destinatario de msj
    usuarios: [], //usuarios de base de datos
    mensajes: [] //chat seleccionado
}


export const ChatProvider = ({ children }) => {

    const [ chatState, dispatch ] = useReducer(chatReducer, initialState )
    
    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}
