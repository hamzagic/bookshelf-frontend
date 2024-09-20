'use client';
import Avatar from '@mui/material/Avatar';
import Header from '@/components/header/Header';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Stack from '@mui/material/Stack';

const Profile: React.FC<{
    name: string;
    email: string;
    monthlyReadingGoal: number;
}> = ({ name, email, monthlyReadingGoal }) => {
    return (
        <>
          <Header pageName='Profile' />
          <div className={styles.container}>
              <div className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                  <Avatar alt='profile' src='/public/images/logo-cropped.png' className={styles.img} />
                  <Button text='Upload new image' onclick={() => {}}/>
                </div>
                  <div className={styles.item}>
                      <label htmlFor='name' className={styles.label}>
                          Display Name
                      </label>
                      <input
                          type='text'
                          name='name'
                          value={name}
                          className={styles.input}
                      />
                  </div>
                  <div className={styles.item}>
                      <label htmlFor='name' className={styles.label}>
                          Email
                      </label>
                      <input
                          type='text'
                          name='email'
                          value={email}
                          className={styles.input}
                      />
                  </div>
                  <div className={styles.item}>
                      <label htmlFor='name' className={styles.label}>
                          Reading goal per month
                      </label>
                      <input
                          type='text'
                          name='goal'
                          value={monthlyReadingGoal}
                          className={[styles.input, styles.last].join(' ')}
                      />
                  </div>
                  <Button text='Update' onclick={() => {}} />
              </div>
          </div>
        </>
    );
};

export default Profile;
