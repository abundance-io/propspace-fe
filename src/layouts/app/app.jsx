import { ThemeProvider } from "@/src/components/global/themeProvider";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <ThemeProvider>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};
