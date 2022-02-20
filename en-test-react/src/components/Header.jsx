import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Header = ({ onSignout }) => {
  const user = useContext(UserContext);

  return (
    <header className="header">
      <h1 className="header__logo">Todo List</h1>
      {/* 
        Needs correcting: To access the email property within the "user" object,
        you have to chain it from the data property of the user object.
        To know the proper way of accessing the properties of an object, you should inspect
        the object in the console.
      */}
      <p className="header__user">{user?.email}</p>
      <p onClick={onSignout} className="header__signout">
        Log out
      </p>
    </header>
  );
};

export default Header;
