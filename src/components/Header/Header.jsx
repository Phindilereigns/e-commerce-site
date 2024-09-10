import React, { useState } from "react";
import styles from "./Header.module.css";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/logo.png"; // Use your logo

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Reigns" />
        <span>Reigns</span>
      </div>

      <div className={styles.right}>
        <div className={styles.bars} onClick={toggleMenu}>
          <AiOutlineMenu />
        </div>

        <ul
          className={styles.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>Sales</li>
          <li>Top Rated</li>
        </ul>

        <input type="text" className={styles.search} placeholder="Search" />

        <CgShoppingBag className={styles.cart} />
      </div>
    </div>
  );
};

export default Header;
