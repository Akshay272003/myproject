import Preferences from "./components/content/preferences/Preferences";
import Notifications from "./components/content/notifications/Notification";
import SecuritySetting from "./components/content/security_setting/SecuritySetting";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Subscription from "./components/content/subscription/Subscription";
import Account from "./components/content/account/Account";
import Company from "./components/content/company/Company";
import Referrals from "./components/content/referrals/Referrals";

const App = () => {
  return ( 
    <Router>
    <div className="main">
      <div className="side-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <div className="">
          <Routes>
            <Route path="/" element={<Notifications />} />
            <Route path="/account" element={<Account />} />
            <Route path="/company" element={<Company />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/security-setting" element={<SecuritySetting />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>

        </div>
      </div>
    </div>
    </Router>
   );
}
 
export default App;