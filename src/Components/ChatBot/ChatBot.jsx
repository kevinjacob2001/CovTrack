import React from 'react'
import ChatBot from 'react-simple-chatbot';


function ChatBotComponent() {
    return (
        <div style={{bottom:"20px",right:"20px",position:"fixed"}}>
            
<ChatBot
floating={true}
width="300px  !important"
height="300px !important"
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
        </div>
    )
}

export default ChatBotComponent
