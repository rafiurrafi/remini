//node-sass

import { useState } from "react";

//react-toastifyW@6.0.8
const PassGenApp = () => {
  const [length, setLength] = useState(20);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  return (
    <div>
      <h1>Password generator</h1>
      <div>
        {/* Password show here */}
        <button>Copy</button>
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
            onChange={(e) => setUppercase(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lowercase">Lowercase</label>
          <input id="lowercase" type="checkbox" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input id="number" type="checkbox" />
        </div>
        <div>
          <label htmlFor="symbol">symbols</label>
          <input id="symbol" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default PassGenApp;
