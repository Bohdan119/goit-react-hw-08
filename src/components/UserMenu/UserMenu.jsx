import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = ({ handleLogOut }) => {
  const { name } = useSelector(selectUser)
  return (
    <div>
      <p>Welcome, {name} </p>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

UserMenu.propTypes = {
  handleLogOut:PropTypes.func.isRequired,
}

export default UserMenu;
