import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";

import "./index.scss";

const SendMessage = () => {
  const [formValue, setFormValue] = useState<string>("");
  const [isSending, setIsSending] = useState(false);

  // <++> TODO: Specify e type
  const sendMessage = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    if (!formValue) return;

    fetch(import.meta.env.VITE_VERCEL_API + "/" + formValue)
      .then((res: Response) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => {
        setFormValue("");
        setIsSending(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("error sending message");
        toast.error(error.message, {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setFormValue("");
        setIsSending(false);
      });
  };

  return (
    <div className="sendmessage__container">
      <form className="sendmessage__container--form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        {/* <button type="submit">📩</button> */}
        <Button
          text="📩"
          type="submit"
          colorScheme="purple"
          disabled={!formValue}
          isLoading={isSending}
        />
      </form>
    </div>
  );
};

export default SendMessage;
