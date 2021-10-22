import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Dr. Smart';


const GetConfig = (authStatus) => {
   return {
     initialMessages: [createChatBotMessage(`Hi! I'm ${botName}, the smaertest chatbot in the room`), createChatBotMessage(`You can chat with me or upload a image to my left here`)],
     botName: botName,
     customStyles: {
       botMessageBox: {
         backgroundColor: '#376B7E',
       },
       chatButton: {
         backgroundColor: '#5ccc9d',
       },
     },
     state:{
       authStatus: authStatus
     }
   };
}


export default GetConfig;
