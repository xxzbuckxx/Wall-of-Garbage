import react, { useEffect, useState } from "react";
import MessageBoard from "./components/MessageBoard";
import SendMessage from "./components/SendMessage";

import "./App.scss";

const App = () => {
  return (
    <div className="app__container">
      <div className="app__container--top">
        <div className="app__container--top--space"></div>
        <h1>Wall of Garbage</h1>
      </div>
      <MessageBoard />
      <div className="app__container--bottom">
        <SendMessage />
        <div className="app__container--bottom--space"></div>
      </div>
    </div>
  );
};

export default App;
