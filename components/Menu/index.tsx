/**
 * menu.jsx
 */
import * as React from "react";
import { useState, useRef, useEffect  } from 'react';
import Link from "next/link";
import { TweenMax } from 'gsap';

import { MenuContext } from "../../context/menu";

import styles from './styles.module.css';

const Menu: React.FC = (props) => {
  const { state, setState } = React.useContext(MenuContext);
  let menu = useRef(null);
  const [visibiiity, setVisibility] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(null);
  const [closeAnimation, closeFadeAnimation] = useState(null);

  const onClick = (): void => {
    setState('close');
  }

  useEffect (() => {
    setOpenAnimation(
      TweenMax.to(menu, 0.6, {
          opacity: 1,
          ease: 'Power2.easeOut'
        }).pause()
    )
  },[]);

  useEffect (() => {
    closeFadeAnimation(
      TweenMax.to(menu, 0.6, {
          opacity: 0,
          ease: 'Power2.easeOut',
          onComplete: () => {
            setVisibility(false);
          }
        }).pause()
    )
  },[]);

  useEffect(() => {
    let value = 0;
    let onCompletion = undefined;
    if(state === 'open') {
      setVisibility(true);
      value = 0.8
    } else {
      onCompletion = () => { setVisibility(false); }
      value = 0;
    }  
    TweenMax.to(menu, 0.6, {
      opacity: value,
      ease: 'Power2.easeOut',
      onComplete: onCompletion
    }).play()
  })

  const visibleStyle = (state === 'close' && !visibiiity) ? styles.hide : '';

  return (
    <div className={`menu ${styles.menu} ${visibleStyle}`} ref={element => { menu = element }}>
      <ul onClick={onClick}>
        <li><Link href={`/`}>top</Link></li>
        <li><a href={`https://github.com/moxuse/cv/blob/master/README.md`} target='blank'>cv</a></li>
        <li><Link href={`/work`} >work</Link></li>
        <li><Link href={`/blog`} id={1}>blog</Link></li>
      </ul>
    </div>
  );
}

export default Menu;

// Menu.defaultProps = {
//   onClose: undefined
// };
