import react, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

type Message = {
  id: number;
  message: string;
};

type GetMessagesResponse = {
  data: Message[];
};

const getMessages = async () => {
  try {
    const { data, status } = await axios.get<GetMessagesResponse>(
      import.meta.env.VITE_VERCEL_API,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error mesage: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexcpected error occurred";
    }
  }
};

function App() {
  const [messages, setMessages] = useState<GetMessagesResponse | string>({
    data: [],
  });

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
    </div>
  );
}

export default App;
