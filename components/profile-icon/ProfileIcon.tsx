'use client';
import { useRouter } from 'next/navigation';
import styles from './ProfileIcon.module.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const ProfileIcon = () => {
  const router = useRouter();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <div className={styles.iconContainer}>
          <div {...bindTrigger(popupState)}>
            <Avatar>
              <PersonIcon fontSize='large' className={styles.icon} />
            </Avatar>
          </div>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => {
              router.push('/profile');
              popupState.close();
              }}>Profile</MenuItem>
            <MenuItem onClick={() => {
              router.push('/');
              popupState.close();
            }}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </PopupState>
  );
};

export default ProfileIcon;
