import "./Header.scss";
import { FaCloudSun } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        Karen Santana
      </h1>

      <ul className="menu">
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="tools">
        <FaCloudSun className="icon-dark-mode" />

        <p className="language">Language</p>
      </div>
    </div>
  );
}

export default Header;
