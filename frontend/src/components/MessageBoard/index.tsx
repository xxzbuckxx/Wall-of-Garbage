import React, { useEffect, useState } from "react";

import "./index.scss";

type Message = {
  id: number;
  message: string;
};

const MessageBoard = () => {
  const [messages, setMessages] = useState<Message[] | undefined>();

  useEffect(() => {
    fetch(import.meta.env.VITE_VERCEL_API)
      .then((res: Response) => {
        return res.json();
      })
      .then((result) => {
        setMessages(result);
      });
  }, []);

  return (
    <div className="messageboard__container">
      {messages &&
        messages.map((message: Message) => (
          <p key={`${message.id}`}>{message.message}</p>
        ))}
    </div>
  );
};

export default MessageBoard;
