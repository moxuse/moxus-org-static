// @flow
import React from 'react'
import { NextPage } from "next";
import Work from "./Work";
import Post from "./Post";
import { IndexPageProps } from "../../pages/index";

import styles from "./styles.module.css";

const Digest: NextPage<IndexPageProps> = (props: IndexPageProps): JSX.Element => {
  return (
    <div className={styles.digest}>
      <div className={styles.right}>
        <Post posts={props.post} />
      </div>
      <div className={styles.left}>
        <Work {...props.work} />
      </div>
    </div>
  )
};

export default Digest;
