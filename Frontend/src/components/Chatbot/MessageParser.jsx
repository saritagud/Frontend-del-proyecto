import React from 'react';
import ReactHowler from 'react-howler';
import sonidoMensaje from "../../assets/tono.mp3";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    console.log(message)
    actions.handleHello(message)
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
      
      <ReactHowler src={sonidoMensaje} /> 
    </div>
  );
};

export default MessageParser;