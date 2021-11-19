// @flow
import React from 'react';
import Link from "next/link";
import { WorkPageProps } from "../../services/work";

import styles from "./styles.module.css";

const Work: React.FC<WorkPageProps> = (props: WorkPageProps): JSX.Element => {
  const makeGrid = () => {
    return props.works.map(item => {
      let path_name = '';
      
      if (item.path) {
        path_name = '/blog/post/' + item.path.substring(0, item.path.length - 3);
      }
      return (<li key={item.title}>
        <Link href={path_name}>
          <div>
            <h5>{item.title}</h5>
            <img alt={'recent work ' + item.title} src={ `../../images/thumb/` + item.thumb } />
          </div>
        </Link>
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