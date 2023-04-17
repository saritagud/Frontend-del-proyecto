import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Chatbot from "react-chatbot-kit";
import './Chatbot/chat.css'
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import Nav from "./Nav";



function Chat() {
  const navigate = useNavigate();
  const existeToken = localStorage.getItem('token');
  useEffect(() => {
    if ( !existeToken ) navigate('/');
  }, [])

  return (
    <div className="bg-bgColor">
    <Nav/>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chat;













/* import Nav  from "./nav"
import Footer from './footer';
import {FaArrowCircleRight} from "react-icons/fa";
import React, { useState, useRef } from 'react';



function Chat() {
    const inputRef = useRef()

    function funcionamiento(){
        const input = inputRef.current;
        let respuesta = React.createElement('p')
        respuesta.props.content('')

        let pregunta = React.createElement('p');
        pregunta.props.content(input.value)

        const contenedor = React.createElement('div');
        contenedor.props.content(pregunta);
        contenedor.props.content(respuesta)
    }
    
    return (
        <div>
            <Nav/>
                <section className="h-screen">
                    <h1 className=" font-signikaNegative text-center text-3xl">ChatUVM</h1>

                    <div className="h-screen border-2 border-black">

                    </div>

                    <form className=" bg-verdeOscuro p-3" onSubmit={funcionamiento}>
                        <input ref={inputRef} className="w-80  border-2 border-black rounded-xl ml-4 h-10 bg-white p-2 font-mono" type="text"></input>
                        <button className="cursor-pointer absolute right-9 mt-2 text-2xl"><FaArrowCircleRight/></button>
                    </form>
                </section>
            
        </div>
    )
}

export default Chat; */