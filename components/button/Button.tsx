import styles from './Button.module.css';
import classNames from 'classnames';

const Button = ({ text, onclick, disabled }: { text: string; disabled?: boolean, onclick: () => void }) => {
  const btnClass = classNames(styles.btn, {[styles.disabled]: disabled });
  return (
    <button onClick={onclick} className={btnClass} disabled={disabled}>{text}</button>
  );
};

export default Button;