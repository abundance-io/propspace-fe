import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <main className="bg-prop-black text-prop-white">
      <Outlet />
    </main>
  );
};
