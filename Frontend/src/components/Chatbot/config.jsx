import { createChatBotMessage } from "react-chatbot-kit";

/* let preguntaJson = {
  pregunta: "Como puedo saber mis notas?",
};

fetch("http://localhost:3000/respuesta", {
  method: "Post",
  body: JSON.stringify(preguntaJson),
}).then(response => response.json())
.then(data => console.log(data)) */


const config = {
  botName: "MomoyBot",
  initialMessages: [createChatBotMessage("Hola, soy MomoyBot")],
};

export default config;
