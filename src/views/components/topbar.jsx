import pikachu from "../../assets/images/pikachu.png";
import menu from "../../assets/images/menu-burger.png";
import React, { useEffect, useState } from "react";

const goBack = () => {
  window.location.hash = "#/home";
};

function TopBar() {
  const [notOnLoginPage, setNotOnLoginPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setNotOnLoginPage(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="topbar">
      <div className="container1" onClick={goBack}>
        <img src={pikachu} className="img_1" />
        <div className="iconText">PokeMe</div>
      </div>
      {notOnLoginPage && (
        <div className="container2">
          <div className="dropdown">
            <button className="dropbtn">
              <img src={menu} className="menu" />
            </button>
            <div class="dropdown-content">
              <a href="#history">History</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
