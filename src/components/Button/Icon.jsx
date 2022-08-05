import styles from "./button.module.scss";

const Icon = ({ Icon, onClick, className, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles[className]}
    {...props}
  >
    <Icon />
  </button>
);

export default Icon;
