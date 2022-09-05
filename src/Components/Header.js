import hamburger from "../Images/icon-hamburger.svg";
import menuClose from "../Images/icon-close.svg";

const Header = ({ toggleMenu, menu, getInnerHeight }) => {
  return (
    <>
      <header
        className={menu === true ? "header" : ""}
        onClick={getInnerHeight}
      >
        <div>
          <img
            src={menu === false ? hamburger : menuClose}
            alt=""
            onClick={toggleMenu}
            className="hamburger"
          />
          <ul className={`menu-list ${menu === false ? "close" : "open"}`}>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <h2 className="header-h3">room</h2>
      </header>
      <header className="desktop-header" onClick={getInnerHeight}>
        <div>
          <ul className="desktop-list">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <h2>room</h2>
      </header>
    </>
  );
};

export default Header;
