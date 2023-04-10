import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = (message) => {
      let e={
        pregunta: message
      }
        fetch('http://localhost:3000/respuesta', {
            method: 'Post',
            body: JSON.stringify(e),
            headers:{
              'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data.text);
                const botMessage = createChatBotMessage(data.text);
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                }));
            });

        // const botMessage = createChatBotMessage(message);

        // setState((prev) => ({
        //     ...prev,
        //     messages: [...prev.messages, botMessage],
        // }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
