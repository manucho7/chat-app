import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

    const { chatState, dispatch } = useContext( ChatContext );

    const { chatActivo } = chatState;

    const onClick = async () => {

        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });

        // Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${ usuario.uid }`);
        
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        });

        //Mover el scroll
        scrollToBottom('mensajes');
    }

    return (
        <div 
            className={`chat_list ${ (usuario.uid === chatActivo) && 'active_chat' }`}
            onClick={ onClick }
        >

            <div className="chat_people">

                <div className="chat_img"> 
                    <img src="https://www.pngkey.com/png/detail/308-3081138_contact-avatar-generic.png" alt="sunil" />
                </div>

                <div className="chat_ib">
                    <h5>{ usuario.nombre }</h5>

                    {
                        (usuario.online)
                            ? <span className="text-success">Online</span>
                            : <span className="text-danger">Offline</span>
                    }

                </div>

            </div>
            
        </div>
    )
}
