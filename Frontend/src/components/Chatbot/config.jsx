import { createChatBotMessage } from "react-chatbot-kit";

const getImageUrl = () => localStorage.getItem("image_url");

const config = {
  botName: "MomoyBot",
  botAvatar: '/Frontend/src/assets/robotBot.png',
  headerTitle: 'Asistente virtual',


  initialMessages: [createChatBotMessage("Hola, soy MomoyBOT. ¿Como puedo ayudarte?")],

  customComponents: {
   header: () => <div style={{fontSize: '40px', fontWeight: 'bold', textAlign: 'center',color:"black", fontFamily: 'Urbanist', marginTop:'10px'}}>MomoyBot</div>,
   
   botAvatar: () => <img src="/src/assets/robotBot.png"/>,

   userAvatar: () => <img src={getImageUrl()}/>,
   
 },
};

export default config;
