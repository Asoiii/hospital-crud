"use client";

const Button = (props) => {
  const {
    children,
    className = "btn btn-primary",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button className={`${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
