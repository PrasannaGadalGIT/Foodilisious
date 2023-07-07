import React from "react";
import styles from "@/styles/navbar.module.css"; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className={styles.navmenu}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
