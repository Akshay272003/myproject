import DashboardSvg from '../../../../assets/dashboard.svg';
import SideLink from './SideLink';
import Style from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <div className="sidebar flex-col">

            <div className={`${Style.sidebar_desc} flex-col`}>
                <div className={Style.dashboard_img}>
                    <img src={DashboardSvg} alt="" />
                </div>
                <div className={`${Style.desc} flex-col`}>
                    <h4 className="heading">Settings</h4>
                    <p className='sub-title'>Manage your preferences and general settings.</p>
                </div>
            </div>

            <div className={`${Style.side_nav} flex-col`}>
                <SideLink url="/settings/account" linkName="Account" />
                <SideLink url="/settings/company" linkName="Company" />
                <SideLink url="/settings/subscription" linkName="Subscription" />
                <SideLink url="/settings/security-setting" linkName="Security" />
                <SideLink url="/settings/referrals" linkName="Referrals" />
                <SideLink url="/settings/notifications" linkName="Notifications" />
                <SideLink url="/settings/preferences" linkName="Preferences" />

            </div>

        </div>
    );
}

export default Sidebar;