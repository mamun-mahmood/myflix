import { Outlet } from "react-router-dom";
import { Conatiner } from "./styles/Navbar.styles";

const Navbar = () => {
  return (
    <>
      <Conatiner>
        <h1>Navbar</h1>
      </Conatiner>
      <Outlet />
    </>
  );
};

export default Navbar;
