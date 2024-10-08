// styles
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.scss';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName);
  };

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <label>
        <span>email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        <span>display name:</span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>

      {isPending ? (
        <button className='btn' disabled>
          Loading...
        </button>
      ) : (
        <button className='btn'>Signup</button>
      )}

      {error && <p>{error}</p>}
    </form>
  );
}
