import { Link } from "react-router-dom";
import { links } from "../data/dummy";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {links.map((item) => (
        <>
          <h4>{item.title}</h4>

          {item.links.map((link) => (
            <p>
              <Link to={`/${link.name}`}>
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
