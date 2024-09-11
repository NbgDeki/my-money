// styles
import styles from './Home.module.scss';

// components
import TransactionForm from './TransactionForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm></TransactionForm>
      </div>
    </div>
  );
}
