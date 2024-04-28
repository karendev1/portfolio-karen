import "./Header.scss";
import { FaCloudSun } from "react-icons/fa";
import Logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Karen Santana" className="logo" />

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
