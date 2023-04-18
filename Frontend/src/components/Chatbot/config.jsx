import { createChatBotMessage } from "react-chatbot-kit";

const imageUrl = localStorage.getItem("image_url");

const config = {
  botName: "MomoyBot",
  botAvatar: '/Frontend/src/assets/robotBot.png',
  headerTitle: 'Asistente virtual',


  initialMessages: [createChatBotMessage("Hola, soy MomoyBot")],

  customComponents: {
   header: () => <div style={{fontSize: '40px', textAlign: 'center', fontFamily: 'Signika Negative', marginTop:'10px'}}>MomoyBot</div>,
   
   botAvatar: () => <img src="/src/assets/robotBot.png"/>,

   userAvatar: () => <img src={imageUrl}/>,
   
 },
};

export default config;
