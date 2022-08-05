import styles from "./button.module.scss";

const Button = ({ children, type, onClick, disabled, color, transparent }) => (
  <button
    disabled={disabled}
    type={type || "button"}
    className={`${styles.btn} ${styles[`btn-${color || ""}`]} ${
      styles[`btn-${transparent || ""}`]
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
