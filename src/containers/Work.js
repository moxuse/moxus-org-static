import React from 'react'
import { useRouteData } from 'react-static'
import { Grid, Row } from 'react-flexbox-grid';
import Thumbnail from '../components/Thumbnail.js'

import styles from './Work.css';

function Work() {
  const { works } = useRouteData()

  const makeGrid = () => {
    let grid = [];
    let col = [];
    works.map((item, i) => {
      col.push(<Thumbnail type="row" data={item} key={item.path}/>);
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
