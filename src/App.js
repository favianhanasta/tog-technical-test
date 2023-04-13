import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopMenu from "./Components/TopMenu/TopMenu";
import './App.css';
import FeeType from "./Pages/FeeType/index.js";

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex relative">
      <Sidebar expand={expand} setExpand={setExpand} />
      <div className={`w-full ${expand ? 'expanded' : null}`}>
        <TopMenu />
        <div className="main">
          <span className="breadcrumb gap-2 flex items-center">
            Master Data Management
            <img src="/Assets/Images/right.svg" alt="suitcase" />
            <span className="color-selected flex items-center">FeeType</span>
          </span>
          <FeeType />
        </div>
      </div>
    </div>
  );
}

export default App;
