import React, { useState } from 'react'
import  "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import  { MainContainer , ChatContainer , MessageList , Message , MessageInput , TypingIndicator  } from "@chatscope/chat-ui-kit-react"
function ChatBot() {
    const [typing , setTyping ]= useState(false)
    const [messages , setMessages ] = useState([
        {
            message : "Hello, I am Ak..!",
            sender : "Ak"
        }
    ])

     const handleSend = async (message) =>{
        const newMessage ={
            message : message, 
            sender :"user",
            direction :  "outgoing"
        }

     const newMessages =   [...messages, newMessage]

     setMessages(newMessages)

      setTyping(true)
     
      await processMessageToChatGPT(newMessages)
     
     }

async  function processMessageToChatGPT(chatmessages){

    let apiMessages = chatmessages.map((messageObject)=>{
        let role;
        if (messageObject.sender === "Ak") {
            role="assistant"
        } else {
            role="user"
        }
        return {role : role,content : messageObject.message}
    })
    
    const systemMessage = {

        role : "system",
        content:"Explain all concepts like i am 10 year old."

    }


    const apiRequestBody = { 
        "model" : "gpt-3.5-turbo",
        "messages" : [
            systemMessage,
            ...apiMessages
        ]
    } 

    await fetch ("https://api.openai.com/v1/chat/completions",{
        method :"POST",
        headers : {
            "Authorization": " Bearer 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",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(apiRequestBody)
    }).then((data)=>{
        return data.json(); 
    }).then((data)=>{
     
        setMessages(
            [...chatmessages,{
                message:data.choices[0].message.content,
                sender:"Ak"
            }]
            );
            setTyping(false)
    })

}


  return (
    <>
    
     <div className='relative h-[500px] w-[700px]  '>
        <MainContainer>
            <ChatContainer>
                <MessageList
                
                scrollBehavior='smooth'
                 typingIndicator={typing ? <TypingIndicator content="Ak is typing" /> : null } >

                {messages.map((message, i )=>{
                    return <>
                        <Message key={i} model={message} />
            
                    </>
                })

                }
                </MessageList>
                <MessageInput  attachButton={false}  placeholder='type here...' onSend={handleSend} /> 
            </ChatContainer>
        </MainContainer>
     </div>

    </>
  )
}

export default ChatBot