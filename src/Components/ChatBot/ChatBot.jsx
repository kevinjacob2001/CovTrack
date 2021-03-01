import React from "react";
import { useSelector } from "react-redux";
import ChatBot from "react-simple-chatbot";
import { selectUser, userSlice } from "../../features/userSlice";

import "./ChatBot.css";

function ChatBotComponent() {
  const user = useSelector(selectUser);

  return (
    <div
      style={{
        bottom: "20px",
        right: "20px",
        position: "fixed",
        zIndex: "999",
      }}
    >
      <ChatBot
        className="chat__Bot"
        floating={true}
        
        placeholder=" "
        headerTitle="CovBot"
       /* recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: "en", voice: null }} */
        steps={[
          {
            id: "1",
            message: `Hello ${user.displayName?user.displayName:"user"} welcome to CovTrack19, Which helpline number do you want?`,
            trigger: "2",
          },
          {
            id: "2",
            options: [
              {
                value: 1,
                label: "Ministry of Health and Family Welfare helpline",
                trigger: "3",
              },
              { value: 2, label: "Kerala state helpline number", trigger: "4" },
              { value: 3, label: "DISHA Helpline number", trigger: "5" },
            ],
          },
          {
            id: "3",
            message:
              "The number is 1075. Do you want to continue using the Bot?",
            trigger: "6",
          },
          {
            id: "4",
            message:
              "The number is 0471-2309251. Do you want to continue using the Bot?",
            trigger: "6",
          },
          {
            id: "5",
            message:
              "The number is 1056. Do you want to continue using the Bot?",
            trigger: "6",
          },
          {
            id: "6",
            options: [
              { value: 1, label: "Yes", trigger: "7" },
              { value: 2, label: "No", trigger: false },
            ],
          },
          {
            id: "7",
            message: `Which helpline number do you want?`,
            trigger: "2",
          },
        ]}
      />
    </div>
  );
}

export default ChatBotComponent;
