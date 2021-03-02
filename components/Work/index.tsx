import React from 'react';
import { WorkPageProps } from '../../services/work';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import Thumbnail from './Thumbnail/index';

import styles from './styles.module.css';

const Work: React.FC<WorkPageProps> = ({ works }): JSX.Element => {
  const makeGrid = () => {
    // let grid: Array<Array<JSX.Element>> = [];
    let col: Array<JSX.Element> = [];
    return works.map((item, i) => {
      return (<li><Thumbnail {...item} key={item.title} /></li>);
      // if (i % 3 === 2 || i === works.length - 1) {
        // grid.push(col);
      // col = [];
    });
  };
    // return col;
  // const rows = makeGrid();
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
