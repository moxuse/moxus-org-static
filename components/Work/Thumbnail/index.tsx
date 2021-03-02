/**
 * thumbnail.jsx
 */

import * as React from 'react';
import { WorkProps } from '../../../services/work';
import Link from "next/link";
import styles from './styles.module.css';

const Thumbnail: React.FC<WorkProps> = (props: WorkProps) => {
  console.log(props)
  let ex_path = props.ex_path;
  let path_name = '';
  let target = '_self';
  if (props.path) {
    path_name = '/blog/post/' + props.path.substr(0, props.path.length - 3);
  }
  let body =
      (<Link href={`${path_name}`}>
        <img src={`../../images/thumb/${props.thumb}`} alt={props.title}/>
      </Link>);
  if (ex_path) {
    path_name = ex_path;
    target = '_blank';
  }
  body = (
    <a href={`${path_name}`} target={target}>
      <img src={`../../images/thumb/${props.thumb}`} alt={props.title}/>
    </a>);
  return (
    <div className={styles.thumbnail}>
      {body}
      <p className={styles.title}>
        {props.title}
      </p>
    </div>
  );
}

export default Thumbnail;
