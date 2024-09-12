import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import styles from './Home.module.scss';

// components
import TransactionForm from './TransactionForm';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}></TransactionForm>
      </div>
    </div>
  );
}
