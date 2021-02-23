/**
 * header.jsx
 */
import * as React from "react";
import Link from "next/link";
import Menu from '../Menu';
import { MenuContext } from "../../context/menu";
import styles from "./styles.module.css";

const Header: React.FC = (props) => {
  const { state, setState } = React.useContext(MenuContext);

  const onMenuClick = (e) => {
    setState(state === 'open' ? 'close' : 'open');
  };

   const isOpen = state === 'open' ? 'open' : '';

    return (
      <div className={styles.header}>
        <Menu />
        <div className={styles.title}>
          <h1>
            <Link href={`/`}>moxus.org</Link>
          </h1>
          <div className={styles.menu_btn_wrap}>
            <div
              className={`menu_btn btn12 ${isOpen}`}
              onClick={onMenuClick}
            >
              <div className={`icon`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Header;
