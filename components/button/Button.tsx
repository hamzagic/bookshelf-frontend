import styles from './Button.module.css';
import classNames from 'classnames';

const Button = ({ text, onclick }: { text: string; onclick: () => void }) => {
  const btnClass = classNames(styles.btn);
  return (
    <button onClick={onclick} className={btnClass}>{text}</button>
  );
};

export default Button;