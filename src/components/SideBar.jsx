import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
