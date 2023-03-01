const Button = ({handlerFunc, style, children}) => {
  return (
    <button className={style} onClick={handlerFunc}>
      {children}
    </button>
  );
}

export default Button;