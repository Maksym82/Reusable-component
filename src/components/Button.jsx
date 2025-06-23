export default function Button({
  text = "Some text",
  icon,
  size = "medium",
  variant = "primary",
  fullWidth = false,
  isDisabled = false,
  onClick,
  children
}) {
  return (
    <button
      className={`button ${variant} ${size} ${isDisabled ? "disabled" : ""} ${
        fullWidth ? "full-width" : ""
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
