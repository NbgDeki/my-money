import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// styles
import styles from './Home.module.scss';

// components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}

        {documents && (
          <TransactionList transactions={documents}></TransactionList>
        )}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}></TransactionForm>
      </div>
    </div>
  );
}
