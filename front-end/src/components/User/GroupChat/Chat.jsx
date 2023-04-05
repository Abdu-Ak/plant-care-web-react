import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import React, { useEffect, useState } from "react";

function Chat({ socket }) {
  const userId = localStorage.getItem("userId");

  const [messageList, setMessageList] = useState([
    {
        message: "",
        sentTime: "",
        sender: "",
        direction: "",
        position: "",
    }
  ]);

  const handleSend = async (mesg) => {
    const messageData = {
      sender: localStorage.getItem("userId"),
      content: mesg,
    };
    await socket.emit("SendMessage", messageData);
    setMessageList((list) => [...list, {
        message: messageData.content ,
        sentTime: Date.now(),
        sender: messageData.sender,
        direction:  "outgoing" ,
        position: "single", 
      }]);
  };

  useEffect(() => {
   
    socket.on("recieveMesg", (data) => {
        console.log(data);
      setMessageList((list) => [...list, {
        message: data.content ,
        sentTime: Date.now(),
        sender: data.sender,
        direction: data.sender === userId ? "outgoing" : "incoming" ,
        position: "single", 
      }]);
    });
  }, [socket]);

  return (
    <>
      <ChatContainer>
        <ConversationHeader />

        <MessageList
        // typingIndicator={<TypingIndicator content="Zoe is typing" />}
        >
          <MessageSeparator content="Saturday, 30 November 2019" />

          {messageList.map((mesg) => {
            return (
                mesg.message ? ( <Message
                    model={mesg}
                  >
                    <Avatar src="/images/user-default.png" name="Zoe" />
                  </Message>) : "" 
               
            ) 
          })}

          
        </MessageList>
        <MessageInput
          placeholder="Type message here"
          attachButton={false}
          onSend={handleSend}
        />
      </ChatContainer>
    </>
  );
}

export default Chat;
