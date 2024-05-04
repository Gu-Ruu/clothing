import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import Carticon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentuser } from "../../store/user/user.selector.js";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";
import { signOutUser } from "../../utility/Firebase/firebase.utils";
import { selectCartIsOpen } from "../../store/cart/cart.selector.js";
// import { CartContext } from "../../Contexts/cart.context";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentuser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectCartIsOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {""}
              SIGN OUT{""}
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <Carticon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
