// @flow
/**
 * menu.jsx
 */
import * as React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { PlayState, Tween } from 'react-gsap';

import { MenuContext } from "../../context/menu";

import styles from './styles.module.css';

const Menu: React.FC = (props) => {
  const { state, setState } = React.useContext(MenuContext);
  const [ playing, setPlaying ] = React.useState(false);
  const [ visibiiity, setVisibility ] = useState(false);
  const [ opacity, setOpacity ] = React.useState(0.0);

  const onClick = (): void => {
    setState('close');
  }

  useEffect(() => {
    if(state === 'open') {
      setVisibility(true);
      setOpacity(0.8);
    } else {
      setTimeout(() => { setVisibility(false); }, 800);
      setOpacity(0);
    }
    setPlaying(true);
  },[visibiiity, opacity, state])

  const visibleStyle = (state === 'close' && !visibiiity) ? styles.hide : '';

  return (
    <Tween to={{ opacity: opacity }} duration={0.8} ease='power2.inout(1.7)' playState={playing ? PlayState.play : PlayState.pause} >
      <div className={`menu ${styles.menu} ${visibleStyle}`} >
        <ul onClick={onClick}>
          <li><Link href={`/`}>top</Link></li>
          <li><a href={`https://github.com/moxuse/cv/blob/master/README.md`} target='blank'>cv</a></li>
          <li><Link href={`/work`} >work</Link></li>
          <li><Link href={`/blog`} >blog</Link></li>
        </ul>
      </div>
    </Tween>
  );
}

export default Menu;
