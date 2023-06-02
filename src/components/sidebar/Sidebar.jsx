import DashboardSvg from '../../assets/dashboard.svg';
import SideLink from './SideLink';

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
                <SideLink linkName="Account" />
                <SideLink linkName="Company" />
                <SideLink linkName="Subscription" />
                <SideLink linkName="Security" />
                <SideLink linkName="Referrals" />
                <SideLink linkName="Notifications" data={4} />
                <SideLink linkName="Preferences" isActive={true}/>
            </div>

        </div>
     );
}
 
export default Sidebar;