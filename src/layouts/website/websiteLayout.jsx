import { Outlet } from "react-router-dom";
import { Nav } from "../../components/global/nav";

export const WebsiteLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
