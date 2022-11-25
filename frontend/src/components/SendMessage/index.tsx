import React, { useState } from "react";

import "./index.scss";

const SendMessage = () => {
  const [formValue, setFormValue] = useState<string>("");

  // <++> TODO: Specify e type
  const sendMessage = async (e: any) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_VERCEL_API + "/" + formValue)
      .then((res: Response) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("error sending message");
      });
  };

  return (
    <div className="sendmessage__container">
      <form className="sendmessage__container--form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">📩</button>
      </form>
    </div>
  );
};

export default SendMessage;
