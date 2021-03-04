import React from 'react';
import { WorkPageProps } from '../../services/work';
import Thumbnail from './Thumbnail/index';

import styles from './styles.module.css';

const Work: React.FC<WorkPageProps> = ({ works }): JSX.Element => {
  const makeGrid = () => {
    let col: Array<JSX.Element> = [];
    return works.map((item, i) => {
      return (<li><Thumbnail {...item} key={item.title} /></li>);
    });
  };
  return (
    <div className={styles.work}>
      <h1>work</h1>
      <ul className={styles.grid}>
        {makeGrid()}
      </ul>
    </div>
  )
}

export default Work;
