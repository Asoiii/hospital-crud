const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  );
};

export default Label;
