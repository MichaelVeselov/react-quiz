const Button = (props) => {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} className='start-btn'>
      {children}
    </button>
  );
};

export default Button;
