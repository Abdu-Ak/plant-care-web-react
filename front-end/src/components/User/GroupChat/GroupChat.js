/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
 
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
 
} from "@chatscope/chat-ui-kit-react";
import io from "socket.io-client";
import { ENDPOINT } from "../../../constants/Constants";
import Chat from "./Chat";
 
const socket = io.connect(ENDPOINT, {
  query: {
    userId: localStorage.getItem("userId"),
  },
});
  
 
function GroupChat() {
  const [users, setUsers] = useState([]);
  

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    
     socket.emit('joinChat' , userId )
     socket.emit("getUserList");
    socket.on("userList", (users) => {
      setUsers(users);
    });

    

    return () => {
      // socket.emit("disconectUser", userId);
      // socket.disconnect();
    };
  }, []);


 
  

  return (
    <>
      <div className="w-full h-full">
        <div
          className="relative h-[700px]  lg:h-[600px]"          
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
       
            <Chat socket={socket}/> 
            
          </MainContainer>
        </div>
      </div>
    </>
  );
}

export default GroupChat;
