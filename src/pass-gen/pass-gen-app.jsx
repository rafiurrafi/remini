//node-sass

import { useRef } from "react";
import { useState } from "react";
import {
  lowerCaseLettters,
  numbers,
  specialCharacters,
  upperCaseLetters,
} from "./character";

//react-toastifyW@6.0.8
const PassGenApp = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const copyRef = useRef();

  function handleGeneratePassword() {
    if (!uppercase && !lowercase && !number && !symbol)
      throw new Error("select at least one character");
    let lists = "";
    if (uppercase) lists += upperCaseLetters;
    if (lowercase) lists += lowerCaseLettters;
    if (number) lists += numbers;
    if (symbol) lists += specialCharacters;
    setPassword(passwordCreator(lists));
  }
  function passwordCreator(lists) {
    let password = "";
    const listLength = lists.length;
    for (let i = 0; i < length; i++) {
      const index = getRandomIndex(listLength);
      password += lists.charAt(index);
    }
    return password;
  }
  function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }
  function copyFromClipboard() {
    const newTextArea = document.createElement("textarea");
  }
  return (
    <div>
      <h1>Password generator</h1>
      <div>
        {/* Password show here */}
        <h1>{password}</h1>
        <button ref={copyRef}>Copy</button>
      </div>
      <div>
        <div>
          <label htmlFor="length">Password length</label>
          <input
            id="length"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="uppercase">Uppercase</label>
          <input
            id="uppercase"
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="lowercase">Lowercase</label>
          <input
            id="lowercase"
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="symbol">symbols</label>
          <input
            id="symbol"
            type="checkbox"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
        </div>
      </div>
      <button onClick={handleGeneratePassword}>Generate</button>
    </div>
  );
};

export default PassGenApp;
