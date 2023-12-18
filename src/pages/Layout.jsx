import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <div className="container-fluid">
                <div>
                    <NavBar />
                </div>

                <div>
                    <Outlet />
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
