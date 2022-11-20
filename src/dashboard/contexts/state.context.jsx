import { useState } from "react";
import { createContext } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const StateContext = createContext({
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
});
const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const value = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;
