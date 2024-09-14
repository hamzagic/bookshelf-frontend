'use client'
import Image from 'next/image';
import Button from '../button/Button';
import ProfileIcon from '../profile-icon/ProfileIcon';
import styles from './Header.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Tooltip from '@mui/material/Tooltip';

const Header = ({ pageName }: { pageName: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image 
          src="/images/logo-cropped.png" 
          height={40} width={40} 
          alt='' 
          className={styles.logo} 
        />
      </div>
      <div className={styles.pageName}>{pageName}</div>
      <div className={styles.buttons}>
        <Button text='New Booking' onclick={() => {}} />
        <Tooltip title='My Books'>
          <AutoStoriesIcon fontSize='large' sx={{color: '#e214d5'}} className={styles.icons} />
        </Tooltip>
        <Tooltip title='Analytics'>
          <AnalyticsIcon fontSize='large' sx={{color: '#e214d5'}} className={styles.icons} />
        </Tooltip>
        <Tooltip title='Settings'>
          <SettingsIcon fontSize='large' sx={{color: '#e214d5'}} className={styles.icons} />
        </Tooltip>
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Header;