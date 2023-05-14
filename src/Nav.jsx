import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__dark"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
