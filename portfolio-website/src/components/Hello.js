import React from "react";
import "./Hello.scss";
import useTypewriter from "react-use-typewriter";

const Hello = () => {

    const words = ["Hello, my name is Audrius", "I'am a software engineer."];
  const currentWord = useTypewriter({words}, false);

    return (
      <div className="text">
      {currentWord}
      <span className="cursor">|</span>
    </div>
    );
  };

export default Hello;