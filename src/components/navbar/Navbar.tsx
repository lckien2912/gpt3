import Menu from "./menu/Menu";
import ToggleMenu from "./toggleMenu/ToggleMenu";
import Sign from "./sign/Sign";
import logo from "assets/logo.svg";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.linksContainer}>
          <Menu />
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.sign}>
          <Sign />
        </div>
        <ToggleMenu />
      </div>
    </div>
  );
};

export default Navbar;
