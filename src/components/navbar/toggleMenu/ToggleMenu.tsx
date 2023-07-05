import { useState } from "react";
import Menu from "../menu/Menu";
import Sign from "../sign/Sign";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./toggleMenu.module.scss";

const ToggleMenu = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className={styles.navbarMenu}>
      {isToggle ? (
        <RiCloseLine
          color="#fff"
          size={26}
          onClick={() => setIsToggle(false)}
        />
      ) : (
        <RiMenu3Line color="#fff" size={26} onClick={() => setIsToggle(true)} />
      )}
      {isToggle && (
        <div className={styles.menuContainer}>
          <div className={`${styles.menu} scale-up-tr`}>
            <Menu />
            <div className={styles.sign}>
              <Sign />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
