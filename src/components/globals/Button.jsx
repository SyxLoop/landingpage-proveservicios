export default function Button({
  children,
  onClick,
  disabled,
  className
}) {
  const styleButton = {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };
  return (
    <button style={styleButton} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
