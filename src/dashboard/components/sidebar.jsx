import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../contexts/state.context";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { setActiveMenu } = useContext(StateContext);
  return (
    <div className="sidebar">
      {links.map((item) => (
        <>
          <h4>{item.title}</h4>

          {item.links.map((link) => (
            <p>
              <Link to={`/${link.name}`} onClick={() => setActiveMenu(false)}>
                {link.icon} {link.name.toUpperCase()}
              </Link>
            </p>
          ))}
        </>
      ))}
    </div>
  );
};

export default Sidebar;
