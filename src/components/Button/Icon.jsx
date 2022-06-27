const Icon = ({ Icon, onClick, className, ...props }) => (
  <button type="button" onClick={onClick} className={className} {...props}>
    <Icon />
  </button>
);

export default Icon;
