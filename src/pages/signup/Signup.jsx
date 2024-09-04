// styles
import { useState } from 'react';

// styles
import styles from './Signup.module.scss';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `Email: ${email} Password: ${password} Display Name: ${displayName}`
    );
  };

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>

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

      <button className='btn'>Login</button>
    </form>
  );
}
