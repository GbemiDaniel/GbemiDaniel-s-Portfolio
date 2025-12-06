import { useState } from "react";
import "./index.css";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import BackgroundAnimate from "./components/BackgroundAnimate";
import FrameIcons from "./components/FrameIcons";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <BackgroundAnimate />
      <div className="outer-container">
        <FrameIcons />
        <div className="inner-container">
          <LeftContent
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <RightContent activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}

export default App;
