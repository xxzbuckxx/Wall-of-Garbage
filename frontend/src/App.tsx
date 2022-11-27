import react, { useState } from "react";
import { ToastContainer } from "react-toastify";
import MessageBoard from "./components/MessageBoard";
import SendMessage from "./components/SendMessage";

import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
