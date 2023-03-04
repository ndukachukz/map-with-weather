import React, { FC } from "react";
import Drawer from "./Drawer";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <Drawer />
    </div>
  );
};

export default Layout;
