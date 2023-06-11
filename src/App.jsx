import Preferences from "./components/content/preferences/Preferences";
import Notifications from "./components/content/notifications/Notification";
import SecuritySetting from "./components/content/security_setting/SecuritySetting";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Subscription from "./components/content/subscription/Subscription";
import Account from "./components/content/account/Account";
import Company from "./components/content/company/Company";
import Referrals from "./components/content/referrals/Referrals";
import DrawerHome from "./components/drawer/DrawerHome";
// import Shipper from "./components/card_shipper/shipper/Shipper";
import Shipper from "./components/Shipper/Shipper";
import Dashboard from "./components/forwarder/dashboard/Dashboard";
import Documents from "./components/forwarder/documents/Documents";
// prbehave
// import Profile from "./components/probehave/profile/Profile";
// import Card from "./components/probehave/module_card/Card";
import Popup from "./components/probehave/welcome_popup/Popup";
import Checkout from "./components/probehave/checkout/Checkout";

const App = () => {
  return ( 
    <Router>
    <div className="main">
      {/* <div className="side-container">
        <Sidebar />
      </div> */}
      <div className="content-container">
        <div className="">
          <Routes>
            <Route path="/" element={<Notifications />} />

            {/* drawer  */}
            <Route path="/drawer" element={<DrawerHome />} />

            {/* shipper card  */}
            {/* <Route path="/shipper1" element={<Shipper />} /> */}
            <Route path="/shipper" element={<Shipper />} />

            {/* forwarder  */}
            <Route path="/forwarder-dashboard" element={<Dashboard />} />
            <Route path="/forwarder-documents" element={<Documents />} />

            {/* settings section  */}
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/company" element={<Company />} />
            <Route path="/settings/subscription" element={<Subscription />} />
            <Route path="/settings/security-setting" element={<SecuritySetting />} />
            <Route path="/settings/referrals" element={<Referrals />} />
            <Route path="/settings/notifications" element={<Notifications />} />
            <Route path="/settings/preferences" element={<Preferences />} />



            {/* probehave --------------------------
            <Route path="/probehave-profile" element={<Profile />} />
            <Route path="/probehave-modulecard" element={<Card />} /> */}
            <Route path="/probehave-popup" element={<Popup />} />
            <Route path="/probehave-checkout" element={<Checkout />} />
          </Routes>

        </div>
      </div>
    </div>
    </Router>
   );
}
 
export default App;