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
                <SideLink url="settings/account" linkName="Account" />
                <SideLink url="settings/company" linkName="Company" />
                <SideLink url="settings/subscription" linkName="Subscription" />
                <SideLink url="settings/security-setting" linkName="Security" />
                <SideLink url="settings/referrals" linkName="Referrals" />
                <SideLink url="settings/notifications" linkName="Notifications" />
                <SideLink url="settings/preferences" linkName="Preferences" />

            </div>

        </div>
     );
}
 
export default Sidebar;