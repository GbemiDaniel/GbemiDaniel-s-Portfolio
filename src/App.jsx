import { useState } from "react";
import "./index.css";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="outer-container">
      <div className="inner-container">
        <LeftContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <RightContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
