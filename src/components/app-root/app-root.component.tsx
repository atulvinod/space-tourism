import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";

export const AppRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
