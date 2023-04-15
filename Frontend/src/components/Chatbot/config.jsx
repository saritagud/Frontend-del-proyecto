import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "MomoyBot",
  botAvatar: '/Frontend/src/assets/robotBot.png',
  placeholderText: 'Escribe aquí tu mensaje...',
  headerTitle: 'Asistente virtual',


  initialMessages: [createChatBotMessage("Hola, soy MomoyBot")],

  customComponents: {
   header: () => <div style={{fontSize: '40px', textAlign: 'center', fontFamily: 'Signika Negative'}}>MomoyBot</div>,
   
   botAvatar: () => <img src="/src/assets/robotBot.png"/>,

   userAvatar: () => <img src="https://a.pinatafarm.com/1600x900/42eabc1f72/capybara-328ef972dfbb299e413bc16ddaec747c-meme.jpeg"/>,
   
 },
};

export default config;
