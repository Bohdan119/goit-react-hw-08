import LoginForm from '../components/LoginForm/LoginForm'
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

   const handelSubmit = (values, actions) => {
     dispatch(login(values));
     actions.resetForm();
   };


  return (
    <div>
      <h2>Login</h2>
      <hr />
      <LoginForm  handelSubmit={handelSubmit} />
    </div>
  );
};

export default LoginPage;
