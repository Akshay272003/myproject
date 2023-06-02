import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return ( 
    <div className="main">
      <div className="side-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <Topbar />
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
   );
}
 
export default App;