/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { ENDPOINT } from "../../../constants/Constants";

function GroupChat() {
  const [users, setUsers] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const socket = io(ENDPOINT, {
      query: {
        userId: localStorage.getItem("userId"),
      },
    });

    socket.on("userList", (users) => {
      setUsers(users);
    });

    socket.emit("getUserList");

    return () => {
      socket.emit("disconectUser", userId);
      socket.disconnect();
    };
  }, []);


  useEffect(() => {
    
  }, [])
  

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
                {users.map((user, index) => {
                  return (
                    <Conversation
                      key={index}
                      name={user.username}
                      info={user.email}
                    >
                      <Avatar
                        src={user.image}
                        name={user.username}
                        status="available"
                      />
                    </Conversation>
                  );
                })}
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
