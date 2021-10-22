// in ActionProvider.js
import {
  createChatBotMessage,
  setStateFunc,
  createClientMessage
} from "react-chatbot-kit";
import axios from "axios";
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello() {
    var message = this.createChatbotMessage(
      "Hello. Nice to meet you. I am glad that you are here"
    );

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  async handleJoke() {
    var res = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    console.log(res.data.joke);

    var message = this.createChatbotMessage(res.data.joke);

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  handleCancer() {
    var message = this.createChatbotMessage(
      "Cancer is a condition where cells in a specific part of the body grow and reproduce uncontrollably. The cancerous cells can invade and destroy surrounding healthy tissue, including organs. Cancer sometimes begins in one part of the body before spreading to other areas. This process is known as metastasis."
    );

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  handleColonCancer() {
    var message = this.createChatbotMessage(
      "Colon cancer typically affects older adults, though it can happen at any age. It usually begins as small, noncancerous (benign) clumps of cells called polyps that form on the inside of the colon. Over time some of these polyps can become colon cancers."
    );
    var message1 = this.createChatbotMessage(
      "Our site can help you diagnose colon cancer early, try to upload a image here"
    );
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message, message1]
    }));
  }

  handleColon() {
    var message = this.createChatbotMessage(
      "The colon is also known as the large bowel or large intestine. It is an organ that is part of the digestive system (also called the digestive tract) in the human body. The digestive system is the group of organs that allow us to eat and to use the food we eat to fuel our bodies. "
    );

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  handleUnknown() {
    var message = this.createChatbotMessage(
      "I do not really know how to respond, but maybe you can google it "
    );

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  handleResult() {
    var message = this.createChatbotMessage("The results will be immediately shown via alert");
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
    // this.setState(prev => {
    //   console.log(
    //     prev.authStatus.setState(prev =>
    //       prev
    //     )
    //   );
    //   return {
    //     ...prev,
    //     messages: [...prev.messages, message]
    //   };
    // });
  }
}

export default ActionProvider;
