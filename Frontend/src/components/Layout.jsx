import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const bg = location.pathname === "/" ? "bg-peach" : "bg-gray-100";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${bg}`} >
        <Outlet />
      </main>
      <Footer bg={bg} />
    </div>
  );
};

export default Layout;