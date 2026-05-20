import type { MainLayoutProps } from "~/types/components";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main className={`flex-1 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}
