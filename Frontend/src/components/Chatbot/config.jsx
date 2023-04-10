import { createChatBotMessage } from "react-chatbot-kit";

/* let botonPregunta = document.querySelector('.react-chatbot-kit-chat-btn-send');
let inputPregunta = document.querySelector('.react-chatbot-kit-chat-input');
botonPregunta.addEventListener('click', () =>{
    inputPregunta.value;
    console.log(inputPregunta);
}) */

let preguntaJson = {
  pregunta: "Como puedo saber mis notas?",
};

fetch("http://localhost:3000/respuesta", {
  method: "Post",
  body: JSON.stringify(preguntaJson),
}).then(response => response.json())
.then(data => console.log(data))


const config = {
  botName: "ChatUVM",
  initialMessages: [createChatBotMessage("hoi")],
};

export default config;
