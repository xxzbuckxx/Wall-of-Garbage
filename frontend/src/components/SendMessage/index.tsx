import React, { useState } from "react";

import "./index.scss";

const SendMessage = () => {
  const [formValue, setFormValue] = useState<string>("");

  // <++> TODO: Specify e type
  const sendMessage = async (e: any) => {
    e.preventDefault();
    console.log(`sending message '${formValue}'`);
  };

  return (
    <div className="sendmessage__container">
      <form className="sendmessage__container--form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default SendMessage;
