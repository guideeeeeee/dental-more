import logo from "./component/logo.png";
import findUs from "./component/findUs.svg";
import Profile from "./component/profile.svg";
import call from "./component/call.svg";
import calendar from "./component/calandar.svg";
import './navbar.css'
function Navbar() {
  return (
    <div className="tabbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="manu">
        <li className="nav-item">
          <a href="#" className="tab-link">
            <img id="img" src={findUs} alt="find us" />
            FIND US
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
            className="tab-link"
          >
            <img id="img" src={call} alt="call" />
            02648465
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
            className="tab-link"
          >
            <img id="img" src={Profile} alt="profile" />
            PROFILE
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
            className="tab-link"
          >
            <p id="round">
              <img id="img" src={calendar} alt="calendar" />
              <span className="h1"> BOOK APPOINTMENT</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
