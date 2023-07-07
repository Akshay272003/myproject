import Sidebar from "./sidebar/Sidebar";
import Style from "./settings.module.css";
import { Outlet } from "react-router-dom";
const Settings = () => {
    return (
        <div className="flex w-full" style={{ background: 'var(--less-light)', minHeight: '100vh' }}>
            <div className={Style.side_container}>
                <Sidebar />
            </div>
            <div className={Style.content_container}>
                <Outlet />
            </div>

        </div>
    )
}

export default Settings