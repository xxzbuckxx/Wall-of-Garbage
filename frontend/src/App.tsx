import react, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import MessageBox from "./components/MessageBox";

type Message = {
  id: number;
  message: string;
};

const getMessages = async () => {
  try {
    const { data, status } = await axios.get(import.meta.env.VITE_VERCEL_API, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error mesage: ", error.message);
      return { data: [] };
    } else {
      console.log("unexpected error: ", error);
      return { data: [] };
    }
  }
};

const App = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMessages();
      setMessages(data);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(messages);

  return (
    <div className="App">
      <h1>Wall of Garbage</h1>
      {messages.map((message: Message) => {
        return <p key={`${message.id}`}>{message.message}</p>;
      })}
      {/* <MessageBox /> */}
    </div>
  );
};

export default App;
