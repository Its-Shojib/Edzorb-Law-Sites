import { Outlet } from "react-router-dom";
import Navbar from "../Shared-Components/Navbar";


const MainLayout = () => {
    return (
        <div>
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
        </div>
        <div className="max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
        </div>
        <div className="max-w-screen-2xl mx-auto">

        </div>
    </div>
    )
}
export default MainLayout;