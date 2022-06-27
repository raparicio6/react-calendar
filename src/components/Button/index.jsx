const Button = ({ children, type, onClick, disabled, color, transparent }) => (
  <button
    disabled={disabled}
    type={type || "button"}
    className={`btn btn-${color || ""} btn-${transparent || ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
