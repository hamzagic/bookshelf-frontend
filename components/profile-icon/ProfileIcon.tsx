'use client';
import styles from './ProfileIcon.module.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const ProfileIcon = () => {
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
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </PopupState>
  );
};

export default ProfileIcon;
