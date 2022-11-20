import { useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "../contexts/state.context";
import Cart from "./cart";
import Chat from "./chat";
import Notification from "./notification";
import UserProfile from "./userProfile";
const Navbar = () => {
  const {
    isClicked: { cart, chat, notification, userProfile },
    handleClick,
    screenSize,
    setScreenSize,
  } = useContext(StateContext);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 900) return;
  }, [screenSize]);
  return (
    <>
      <button onClick={() => handleClick("cart")}>Cart</button>
      <button onClick={() => handleClick("chat")}>Chat</button>
      <button onClick={() => handleClick("notification")}>Noti</button>
      <button onClick={() => handleClick("userProfile")}>user</button>
      <div>
        {cart && <Cart />}
        {chat && <Chat />}
        {notification && <Notification />}
        {userProfile && <UserProfile />}
      </div>
    </>
  );
};

export default Navbar;
