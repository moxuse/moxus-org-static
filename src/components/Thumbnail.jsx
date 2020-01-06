/**
 * thumbnail.jsx
 */

import { Link } from 'react-router';
import styles from './Thumbnail.css';

export default function Thumbnail() {
  let ex_path = this.props.data.ex_path;
  let path_name = 'post/' + this.props.data.path.substr(0, this.props.data.path.length - 3);
  let body =
      (<Link to={`${path_name}`}>
        <img src={`../../images/thumb/${this.props.data.thumb}`} alt={this.props.data.title}/>
      </Link>);
  if (ex_path) {
    path_name = ex_path;
    body = (
      <a href={`${path_name}`} target="blank">
        <img src={`../../images/thumb/${this.props.data.thumb}`} alt={this.props.data.title}/>
      </a>);
  }
  return (
    <div className={styles.thumbnail}>
      {body}
      <p className={styles.title}>
        {this.props.data.title}
      </p>
    </div>
  );
)
}
