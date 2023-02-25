import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/home">
            PageHome
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/description">
            Description
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/experience">
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/statistiques">
            Statistiques
          </NavLink>
        </li>
      </ul>

      {props.children}
    </nav>
  );
};

export default Nav;
