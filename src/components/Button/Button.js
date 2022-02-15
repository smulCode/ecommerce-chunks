import StyledButton from "./Button.styled"

const Button = ({text,color,bgColor,shadowColor,width,onClick}) => {
  return <StyledButton onClick={onClick} color={color} bgColor={bgColor} shadowColor={shadowColor} width={width}>{text}</StyledButton>;
};

export default Button;
