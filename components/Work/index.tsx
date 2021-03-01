import React from 'react';
import { WorkPageProps } from '../../services/work';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Thumbnail from './Thumbnail'

import styles from './styles.module.css';

const Work: React.FC<WorkPageProps> = ({ works }): JSX.Element => {
  const makeGrid = () => {
    let grid: Array<Array<JSX.Element>> = [];
    let col: Array<JSX.Element> = [];
    works.map((item, i) => {
      col.push(<Thumbnail type="row" data={item} key={item.title} />);
      if (i % 3 === 2 || i === works.length - 1) {
        grid.push(col);
        col = [];
      }
    });
    return grid;
  }
  const rows = makeGrid();
  return (
    <div className={styles.work}>
      <h1>work</h1>
      <Grid className={styles.grid}>
        <Row>
          {rows}
        </Row>
      </Grid>
    </div>
  )
}

export default Work;
