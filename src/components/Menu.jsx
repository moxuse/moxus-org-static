/**
 * menu.jsx
 */
import React, { Component } from 'react';
import { Link } from "components/Router";
import { TweenLite } from 'gsap';

import styles from './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setChangeState = this.setChangeState.bind(this);
  }

  onClick() {
    this.props.onClose();
    document.getElementById('.menu_btn').classList.remove('open');
  }

  openAnimation() {
    this.refs.menu.classList.remove('hide');
    TweenLite.set(this.refs.menu, {opacity: 0});
    TweenLite.to(this.refs.menu, 0.6, {
      opacity: 1,
      ease: 'Power2.easeOut'
    });
    Array.from(this.refs.menu_list.querySelectorAll('li')).forEach((item, i) => {
      TweenLite.set(item, {y: 80, opacity: 0});
      TweenLite.to(item, 0.45, {
        y: 1,
        opacity: 1,
        delay: (i * 0.03),
        ease: 'Power2.easeInOut'
      });
    });
  }

  cloaseAnimation() {
    TweenLite.to(this.refs.menu, 0.6, {
      opacity: 0,
      delay: 0.2,
      ease: 'Power2.easeOut',
      onComplete: () => this.refs.menu.classList.add(styles.hide)
    });

    Array.from(this.refs.menu_list.querySelectorAll('li')).forEach((item, i) => {
      TweenLite.set(item, {y: 0});
      TweenLite.to(item, 0.45, {
        y: -80,
        opacity: 0,
        delay: (i * 0.03),
        ease: 'Power2.easeInOut'
      });
    });
  }

  setChangeState(state) {
    switch (state) {
      case 'open':
        this.refs.menu.classList.remove(styles.hide);
        this.openAnimation();
        break;

      case 'close':
        this.cloaseAnimation();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={`menu ${styles.menu} ${styles.hide}`} ref='menu'>
        <ul ref='menu_list'>
          <li><Link to={`/`} onClick={this.onClick}>top</Link></li>
          <li><a href={`https://github.com/moxuse/cv/blob/master/README.md`} target='blank'>cv</a></li>
          <li><Link to={`/work`} onClick={this.onClick}>work</Link></li>
          <li><Link to={`/blog`} id={1} onClick={this.onClick}>blog</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;

// Menu.defaultProps = {
//   onClose: undefined
// };
