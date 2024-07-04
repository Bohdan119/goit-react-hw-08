import { useDispatch } from 'react-redux'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import {register} from '../redux/auth/operations'

const RegistrationPage = () => {
    const dispatch = useDispatch()
    const registerOp = (userData) => {
        dispatch(register(userData));
     }
    

  return (
      <div>
          <h2>Register</h2>
          <hr/>
      <RegistrationForm submit={registerOp}/>
    </div>
  )
}

export default RegistrationPage
