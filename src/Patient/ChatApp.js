import React, { useState } from "react";
import "./PatApp.css";
import video from "./chatbot.mp4";

const ChatApp = () => {
  const [chatLog, setChatLog] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const videoRef = React.useRef(null);

  const playVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  const sendMessage = () => {
    if (chatInput.trim() !== "") {
      const newChatLog = [...chatLog, { user: "You", message: chatInput }];
      setChatLog(newChatLog);
      playVideo();

      setTimeout(() => {
        setChatLog((prevLog) => [
          ...prevLog,
          { user: "Bot", message: `I'm a bot! You said: ${chatInput}` },
        ]);
        playVideo();
      }, 500);

      setChatInput("");
    }
  };

  return (
    <main className="container">
      <div className="section left">
        <video id="characterVideo" muted ref={videoRef}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="section right">
        <div className="chat-log" id="chatLog">
          {chatLog.map((entry, index) => (
            <div key={index}>{`${entry.user}: ${entry.message}`}</div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            id="chatInput"
            placeholder="Enter Your Symptom"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </main>
  );
};

export default ChatApp;
