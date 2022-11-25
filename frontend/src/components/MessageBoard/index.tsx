import React, { useEffect, useRef, useState } from "react";

import "./index.scss";

type Message = {
  id: number;
  message: string;
};

const MessageBoard = () => {
  const messageBoardRef = useRef<HTMLDivElement>(null);

  function handleScrollClick() {
    messageBoardRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  const [messages, setMessages] = useState<Message[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_VERCEL_API)
      .then((res: Response) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setMessages(result);
        setIsLoading(false);
        setError(null);
      })
      .catch(function (error) {
        console.error(error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="messageboard__container" ref={messageBoardRef}>
      {error ? (
        <p className="messageboard__container--error">
          <i>{error}</i>
        </p>
      ) : isLoading ? (
        <p className="messageboard__container--loading">
          <i>Loading...</i>
        </p>
      ) : (
        messages &&
        messages.map((message: Message) => {
          console.log(message);
          return (
            <p
              className="messageboard__container--message"
              key={`${message.id}`}
            >
              {message.message}
            </p>
          );
        }) &&
        messages.length < 5 && (
          <p
            className="messageboard__container--scroll-up"
            onClick={() => handleScrollClick()}
          >
            <i className="fa-solid fa-arrow-up"></i> Scroll Up{" "}
            <i className="fa-solid fa-arrow-up"></i>
          </p>
        )
      )}
    </div>
  );
};

export default MessageBoard;
