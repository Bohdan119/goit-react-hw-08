import LoginForm from '../components/LoginForm/LoginForm'
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginOp = (userData)=> {
    dispatch(login(userData))
  }


  return (
    <div>
      <h2>Login</h2>
      <hr />
      <LoginForm submit={ loginOp} />
    </div>
  );
};

export default LoginPage;
