import React from 'react';

export const SidebarChatItem = ({ usuario }) => {



    return (
        <div className="chat_list active_chat">

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
