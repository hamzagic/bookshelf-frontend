'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/store/appContext';
import Button from '@/components/button/Button';
import styles from './page.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { setUser } = useUser();
  const user = useUser();
  console.log('here', user);

  useEffect(() => {
    if(user?.user?.isLoggedIn) {
      router.push('/dashboard');
    }
  },[email, password, errors]);

  const validateInputs = (input: string) => {
    console.log(input);
    if (input.trim().length == 0 || !input) {
      setErrors('All fields are required');
      return errors;
    }
  }

  const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(email.target.value);
  }

  const handlePassword = (pwd: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(pwd.target.value);
  }

  const handleLogin = () => {
    
    if(email.length > 0 && password.length > 0) {
      // todo handle login when api is ready
      if(email == 'test@email.com' && password == 'pass') {
        setUser({isLoggedIn: true, user: { email: 'test@email.com' }});
        setEmail('');
        setPassword('');
        router.push('/dashboard');
      } else {
        setMessage('Invalid credentials');
      }
    } else {
      setMessage('All fields are required');
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
      <h1 className={styles.h1}>Login</h1>
        <div className={styles.item}>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            placeholder='Email' 
            className={styles.input}
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email">Password:</label>
          <input 
            type="text"  
            placeholder='Password' 
            className={styles.input}
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div className={[styles.item, styles.btnContainer].join(' ')}>
          <Button text="Submit" onclick={handleLogin} disabled={!email || !password} />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

export default Login;