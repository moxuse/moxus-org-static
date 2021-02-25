/**
 * paginator.jsx
 */

import * as  React from 'react';
import Link from "next/link";

import styles from './styles.module.css';
import { PostProps } from '../../services/post';

type PagenatorProps = {
  currentPage: number;
  dataLength: number;
};

const Pagenator: React.FC<PagenatorProps> = ({ currentPage, dataLength }) => {
  console.log('currentPage',currentPage)
  const  maxVisible = 5;

  const getPageMax = () => {
    return Math.floor(dataLength / maxVisible);
  }
  // const currentLocation = window.location.pathname;
  // console.log(currentLocation);
  const max = getPageMax();
  const visiblePage = currentPage + 1;
  const skip = visiblePage - maxVisible;
 
  const num_show_page_num = Math.min(max, maxVisible);
  let extra = 0;
  if (visiblePage < num_show_page_num) {
    extra = num_show_page_num - visiblePage -1;
  }

  var iterator = Array.apply(null, Array(num_show_page_num)).map((v, i) => {
    return skip + i + extra + 1;
  });

  const previousPage = visiblePage - 1;
  const nextPage =  visiblePage + 1;
  
  const pev_hiding = (visiblePage === 1) ? styles.hiding : '';
  const prev_class_name = visiblePage === 1 ? 'disabled' : '';

  const next_hiding = (max < visiblePage) ? styles.hiding : '';
  const next_class_name = visiblePage === max ? 'disabled' : '';

  // const notdisplaying = (currentLocation === '/') ? styles.notdisplaying : '';

  return (
    <nav className={`${styles.paginator}`}>
      <ul className={`${styles.pagination}`}>
        <li className={` ${prev_class_name} ${pev_hiding} ${styles.active}`} key="list-prev">
          <Link href={'/blog/page/' + previousPage}>
            <p className={styles.active}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Prev</span>
            </p>
          </Link>
        </li>
        {iterator.map((page) => {
          const className = visiblePage - 1 === page ? styles.active : '';
          const hiding = (page < 0 || max < page) ? styles.hiding : '';
          return (
            <li key={visiblePage + '-' + page} className={`${className} ${hiding}`}>
              <Link href={'/blog/page/' + (page + 1)}>{'' + (page + 1)}</Link>
            </li>
          )
        })}
        <li className={`${next_class_name} ${next_hiding} ${styles.active}`} key="fw-prev">
          <Link href={'/blog/page/' + nextPage}>
            <p className={styles.active}>              
              <span className="sr-only">Next</span>
              <span aria-hidden="true">&raquo;</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagenator;
