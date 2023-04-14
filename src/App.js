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
          <FeeType />
        </div>
      </div>
    </div>
  );
}

export default App;
