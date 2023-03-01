const Button = ({handlerFunc, style, children}) => {
  return (
    <button className={style} onClick={handlerFunc}>
      {children}
    </button>
  );
}

// const StyledButton = ({handlerFunc, style, children}) => {
//   return(
    
//   );
// }

export default Button;