'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/Button';
import styles from './page.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {},[email, password, errors]);

  const validateInputs = (input: string) => {
    if (input.trim().length == 0 || !input) {
      setErrors('All fields are required');
    }
  }

  const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(email.target.value);
  }

  const handlePassword = (pwd: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(pwd.target.value);
  }

  const handleLogin = () => {
    validateInputs(email);
    validateInputs(password);
    console.log('hello', email, password);
    if(!validateInputs) {
      // todo handle login when api is ready
      if(email === 'test@email.com' && password == 'pass') {
        console.log('done');
        router.push('/dashboard');
      }
    } else {
      console.log('nope', errors);
      setMessage(errors);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
      <h1 className={styles.h1}>Login</h1>
        <div className={styles.item}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            placeholder='Email' 
            className={styles.input}
            onChange={handleEmail}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email">Password</label>
          <input 
            type="text"  
            placeholder='Password' 
            className={styles.input}
            onChange={handlePassword}
          />
        </div>
        <div className={styles.item}>
          <Button text="Submit" onclick={handleLogin} disabled={!email || !password} />
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;