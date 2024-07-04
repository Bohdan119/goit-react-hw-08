import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
 
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu handleLogOut={handleLogOut} /> : <AuthNav />}
    </div>
  );
}

export default AppBar
