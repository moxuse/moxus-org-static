// @flow
import React from 'react';
import { WorkPageProps } from "../../services/work";

import styles from "./styles.module.css";

const Work: React.FC<WorkPageProps> = (props: WorkPageProps): JSX.Element => {
  const makeGrid = () => {
    return props.works.map(item => {
      return (<li key={ item.title }>
        <h5>{item.title}</h5>
        <img alt={'recent work ' + item.title} src={ `../../images/thumb/` + item.thumb } />
      </li>);
    });
  };
  return (
    <div className={styles.work}>
      <div>
        <h4>{ `[recent work]` }</h4>
      </div>
      <ul>
        { makeGrid() }
      </ul>
    </div>
  )
};

export default Work;