import type { MainLayoutProps } from "~/types/components";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router"; 

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
