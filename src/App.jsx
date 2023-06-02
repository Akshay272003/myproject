import Preferences from "./components/content/preferences/Preferences";
import Notifications from "./components/content/notifications/Notification";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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