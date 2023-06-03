import DashboardSvg from '../../assets/dashboard.svg';
import SideLink from './SideLink';
import "./style.css"

const Sidebar = () => {
    return ( 
        <div className="sidebar flex-col">

            <div className="sidebar-desc flex-col">
                <div className="dashboard-img">
                    <img src={DashboardSvg} alt="" />
                </div>
                <div className="desc flex-col">
                    <h4 className="heading">Settings</h4>
                    <p className='sub-title'>Manage your preferences and general settings.</p>
                </div>
            </div>

            <div className='side-nav flex-col'>
                <SideLink url="/account" linkName="Account" />
                <SideLink linkName="Company" />
                <SideLink url="/subscription" linkName="Subscription" />
                <SideLink url="/security-setting" linkName="Security" />
                <SideLink linkName="Referrals" />
                <SideLink url="/notifications" linkName="Notifications" />
                <SideLink url="/preferences" linkName="Preferences" />

            </div>

        </div>
     );
}
 
export default Sidebar;