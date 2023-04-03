import React, { useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import io from "socket.io-client";
let socket;

function GroupChat() {
  const ENDPOINT = "localhost:8000";

 
  const token = localStorage.getItem("token");
  useEffect(() => {
    
    socket = io(ENDPOINT);

    socket.emit("join", { token }, () => {});
     console.log(socket);
    return () => {
      // socket.emit('disconnect')
      socket.off();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    
    <>
      <div className="w-full h-full">
        <div
          style={{
            height: "600px",
            position: "relative",
          }}
        >
          <MainContainer responsive>
            <Sidebar position="left" scrollable={false}>
              <Search placeholder="Search..." />
              <ConversationList>
                <Conversation
                  name="Lilly"
                  lastSenderName="Lilly"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src="/images/user-default.png"
                    name="Lilly"
                    status="available"
                  />
                </Conversation>

                <Conversation
                  name="Joe"
                  lastSenderName="Joe"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src="/images/user-default.png"
                    name="Joe"
                    status="dnd"
                  />
                </Conversation>

                <Conversation
                  name="Emily"
                  lastSenderName="Emily"
                  info="Yes i can do it for you"
                  unreadCnt={3}
                >
                  <Avatar
                    src="/images/user-default.png"
                    name="Emily"
                    status="available"
                  />
                </Conversation>

                <Conversation
                  name="Patrik"
                  lastSenderName="Patrik"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src="/images/user-default.png"
                    name="Patrik"
                    status="invisible"
                  />
                </Conversation>
              </ConversationList>
            </Sidebar>

            <ChatContainer>
              <ConversationHeader />

              <MessageList
                typingIndicator={<TypingIndicator content="Zoe is typing" />}
              >
                <MessageSeparator content="Saturday, 30 November 2019" />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "single",
                  }}
                >
                  <Avatar src="/images/user-default.png" name="Zoe" />
                </Message>
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Patrik",
                    direction: "outgoing",
                    position: "single",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "normal",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "last",
                  }}
                >
                  <Avatar src="/images/user-default.png" name="Zoe" />
                </Message>
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Patrik",
                    direction: "outgoing",
                    position: "first",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Patrik",
                    direction: "outgoing",
                    position: "normal",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Patrik",
                    direction: "outgoing",
                    position: "normal",
                  }}
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Patrik",
                    direction: "outgoing",
                    position: "last",
                  }}
                />

                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "first",
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "last",
                  }}
                >
                  <Avatar src="/images/user-default.png" name="Zoe" />
                </Message>
              </MessageList>
              <MessageInput placeholder="Type message here" value="" />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

export default GroupChat;
