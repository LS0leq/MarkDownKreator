import {  Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import '../components/css/dashboard.css';


const Dashboard = () => {
    return (
        <div className="dashboard">
            <main>
                <NavBar />

                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
