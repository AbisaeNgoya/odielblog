import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/register/Register";
import Mission from "./components/mission/Mission";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Support from "./components/support/Support";
import Events from "./components/events/Events";





function App() {
  return (
    <div className="App">
      <>
         <TopBar/>
         <Mission/>
         
         </>
         
    </div>
  );
}

export default App;
