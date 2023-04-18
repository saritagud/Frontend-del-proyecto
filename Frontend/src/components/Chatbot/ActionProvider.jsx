import React from "react";
import Swal from 'sweetalert2'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = (message) => {
        const messageLength = 10;

        if (message.length < messageLength) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Por favor,Ingrese su pregunta',
                showConfirmButton: false,
                timer: 4000,
            });
            return; // Tratando de que no imprima el mensaje...
        } else {
            const token = localStorage.getItem("token");

            if (token) {
                const e = {
                    pregunta: message,
                };

                fetch("http://localhost:3000/respuesta", {
                    method: "POST",
                    body: JSON.stringify(e),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Error al enviar la solicitud");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data.text);
                        const botMessage = createChatBotMessage(data.text);
                        setState((prev) => ({
                            ...prev,
                            messages: [...prev.messages, botMessage],
                        }));
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } else {
                // alert("Error: Debe iniciar sesión para enviar su pregunta");
            Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Debe iniciar sesion para enviar su pregunta",
            showConfirmButton: false,
            timer: 4000,
          });
                return; // Tratanndo de que no se imprima el mensaje...
            }
        }
        
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