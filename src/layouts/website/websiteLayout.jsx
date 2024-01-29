import { Outlet } from "react-router-dom";
import { Nav } from "../../components/global/nav";
import { Footer } from "../../components/global/footer";

export const WebsiteLayout = () => {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};
