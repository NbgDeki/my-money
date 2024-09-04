import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// styles
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>myMoney</Link>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
