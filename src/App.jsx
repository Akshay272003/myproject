import Preferences from "./components/content/preferences/Preferences";
import Notifications from "./components/content/notifications/Notification";
import SecuritySetting from "./components/content/security_setting/SecuritySetting";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'antd/dist/reset.css';

import Subscription from "./components/content/subscription/Subscription";
import Account from "./components/content/account/Account";
import Company from "./components/content/company/Company";
import Referrals from "./components/content/referrals/Referrals";
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

// prbehave
// import Profile from "./components/probehave/profile/Profile";
// import Card from "./components/probehave/module_card/Card";
// import Popup from "./components/probehave/welcome_popup/Popup";
// import Checkout from "./components/probehave/checkout/Checkout";
import Header from "./components/probehave/header/Header";

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

              {/* authentication */}
              <Route path="/signin" element={<Signin />} />
              <Route path="/verify-otp" element={<TwoFAOtp />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signup-two" element={<SignupTwo />} />
              <Route path="signup-success" element={<SignupSuccess />} />




              {/* shipper card  */}
              {/* <Route path="/shipper1" element={<Shipper />} /> */}
              <Route path="/shipper" element={<Shipper />} />

              {/* forwarder  */}
              <Route path="/forwarder-dashboard" element={<Dashboard />} />
              <Route path="/forwarder-documents" element={<Documents />} />
              <Route path="/forwarder-custom-quotes" element={<CustomQuotes />} />

              {/* settings section  */}
              {/* <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/company" element={<Company />} />
            <Route path="/settings/subscription" element={<Subscription />} />
            <Route path="/settings/security-setting" element={<SecuritySetting />} />
            <Route path="/settings/referrals" element={<Referrals />} />
            <Route path="/settings/notifications" element={<Notifications />} />
          <Route path="/settings/preferences" element={<Preferences />} /> */}


              {/* probehave --------------------------
            <Route path="/probehave-profile" element={<Profile />} />
            <Route path="/probehave-modulecard" element={<Card />} />
            <Route path="/probehave-popup" element={<Popup />} />
            <Route path="/probehave-checkout" element={<Checkout />} /> */}
              <Route path="/probehave-header" element={<Header />} />

              {/* not in use */}
              {/* drawer  */}
              <Route path="/drawer" element={<DrawerHome />} />
            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;