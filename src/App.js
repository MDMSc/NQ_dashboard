import "./App.scss";
import Header from "./Header";
import SideBar from "./SideBar";
import Advertising from "./navItems/Advertising";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_content">
        <SideBar />
        <Advertising />
      </div>
    </div>
  );
}

export default App;
