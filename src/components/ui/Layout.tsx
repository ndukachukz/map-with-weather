import { useEffect } from "react";
import { useAppContext } from "../../hooks";
import Drawer from "./Drawer";

const Layout = ({ children }: { children: JSX.Element }) => {
  const { selectedCity } = useAppContext();
  useEffect(() => {
    if (!selectedCity) return;
    const drawerCheckBox =
      document.querySelector<HTMLInputElement>("#my-drawer-2");
    if (drawerCheckBox) drawerCheckBox.checked = false;
  }, [selectedCity]);
  return (
    <div className="drawer drawer-mobile relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle swap swap-rotate drawer-button lg:hidden absolute right-2 bottom-10"
        >
          {/* <!-- this hidden checkbox controls the state --> */}
          <input type="checkbox" />

          {/* <!-- hamburger icon --> */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* <!-- close icon --> */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <Drawer />
    </div>
  );
};

export default Layout;
