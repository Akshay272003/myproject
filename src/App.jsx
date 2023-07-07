import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'antd/dist/reset.css';

// settings 
import Preferences from "./components/dashboard/settings/content/preferences/Preferences";
import Notifications from "./components/dashboard/settings/content/notifications/Notification";
import SecuritySetting from "./components/dashboard/settings/content/security_setting/SecuritySetting";
import Subscription from "./components/dashboard/settings/content/subscription/Subscription";
import Account from "./components/dashboard/settings/content/account/Account";
import Company from "./components/dashboard/settings/content/company/Company";
import Referrals from "./components/dashboard/settings/content/referrals/Referrals";

import DrawerHome from "./components/drawer/DrawerHome";

// import Shipper from "./components/card_shipper/shipper/Shipper";
import Shipper from "./components/Shipper/Shipper";

// forwareder
import Dashboard from "./components/forwarder/dashboard/Dashboard";
import Documents from "./components/forwarder/documents/Documents";
import CustomQuotes from "./components/forwarder/dashboard/custom_quotes/CustomQuotes";

// authntication
import Signin from "./components/authenticate/signin/Signin";
import TwoFAOtp from "./components/authenticate/signin/twoFAOtp/TwoFAOtp";
import Signup from "./components/authenticate/signup/Signup";
import SignupTwo from "./components/authenticate/signup/signuptwo/SignupTwo";
import SignupSuccess from "./components/authenticate/signup/signup_success/SignupSuccess";

// booking pages 
import ShipmentHome from "./components/Shipper/shipment_page/ShipmentHome";
import Settings from "./components/dashboard/settings/Settings";

import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* authentication */}
          {/* <Route path="/signin" element={<Signin />} />
              <Route path="/verify-otp" element={<TwoFAOtp />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signup-two" element={<SignupTwo />} />
              <Route path="signup-success" element={<SignupSuccess />} /> */}


          {/* shipper card  */}
          {/* <Route path="/shipper1" element={<Shipper />} /> */}
          {/* <Route path="/shipper" element={<Shipper />} /> */}

          {/* shipment page  */}
          <Route path="/shipment" element={<ShipmentHome />} />

          {/* forwarder  */}
          {/* <Route path="/forwarder-dashboard" element={<Dashboard />} />
              <Route path="/forwarder-documents" element={<Documents />} />
              <Route path="/forwarder-custom-quotes" element={<CustomQuotes />} /> */}

          {/* settings section  */}
          <Route path="/settings" element={<Settings />} >
            <Route index element={<Account />} />
            <Route path="account" element={<Account />} />
            <Route path="company" element={<Company />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="security-setting" element={<SecuritySetting />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="preferences" element={<Preferences />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;