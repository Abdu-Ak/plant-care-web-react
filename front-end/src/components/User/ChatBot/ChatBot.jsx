import React, { useContext, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { BotContext } from "../../../context/BotContext";
import { CHATGPT } from "../../../constants/Constants";
function ChatBot() {

 
  const { showBot,setShowBot } = useContext(BotContext);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Ak..!",
      sender: "Ak",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatmessages) {
    let apiMessages = chatmessages.map((messageObject) => {
      let role;
      if (messageObject.sender === "Ak") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Answer only about plants and agricultural things . otherwise say Iam sorry please ask about plants",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization:
          " Bearer " + CHATGPT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
     console.log(data);
        setMessages([
          ...chatmessages,
          {
            message: data.choices[0].message.content,
            sender: "Ak",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <>
    
        <div className=" w-full h-full p-3 rounded-xl bg-primary">
         <div className="flex justify-end p-2 " >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 hover:cursor-pointer"
            onClick={()=>setShowBot(!showBot)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
         </div>

          <div className="w-full h-full pb-9 ">
            <MainContainer>
              <ChatContainer>
                <MessageList
                  scrollBehavior="smooth"
                  typingIndicator={
                    typing ? <TypingIndicator content="Ak is typing" /> : null
                  }
                >
                  {messages.map((message, i) => {
                    return (
                      <>
                        <Message key={i} model={message} />
                      </>
                    );
                  })}
                </MessageList>
                <MessageInput
                  attachButton={false}
                  placeholder="type here..."
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
     
    </>
  );
}

export default ChatBot;
