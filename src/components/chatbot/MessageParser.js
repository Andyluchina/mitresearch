// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("hello")) {
      this.actionProvider.handleHello();
    } else if (message.includes("joke") || message.includes("funny")) {
      this.actionProvider.handleJoke();
    } else if (message.includes("cancer") && !message.includes("colon")) {
      this.actionProvider.handleCancer();
    } else if (!message.includes("cancer") && message.includes("colon")) {
      this.actionProvider.handleColon();
    } else if (message.includes("cancer") && message.includes("colon")) {
      this.actionProvider.handleColonCancer();
    }else if (message.includes("diagnosis")||message.includes("result")) {
      this.actionProvider.handleResult();
    }else{
      this.actionProvider.handleUnknown(this.state)
    }
  }
}

export default MessageParser;
