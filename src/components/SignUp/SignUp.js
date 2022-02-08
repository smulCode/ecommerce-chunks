import {StyledSignUp,Text} from './SignUp.styled';
import Button from '../Button'

const SignUp = () => {
  return (
  <StyledSignUp>
    <Text>Didn’t make an account yet to manage your subscriptin? Sign up below with the same email you used to place your order.</Text>
    <Button
            text="SIGN UP"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
          />

  </StyledSignUp>);
};

export default SignUp;
