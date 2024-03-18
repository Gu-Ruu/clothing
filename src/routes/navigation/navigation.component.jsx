import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../Contexts/user.context";
import { signOut } from "firebase/auth";
import "./navigation.styles.scss";
import { signOutUser } from "../../utility/Firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    const res = await signOutUser()
    console.log(res)
  };
  // console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
