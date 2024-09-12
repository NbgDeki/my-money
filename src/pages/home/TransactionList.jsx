// styles
import styles from './Home.module.scss';

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map(({ id, name, amount }) => (
        <li key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.amount}>${amount}</p>
        </li>
      ))}
    </ul>
  );
}
