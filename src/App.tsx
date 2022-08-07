import React, { useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";

const App: React.FunctionComponent = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <div>
        <nav>
          <div onClick={showSidebar}>
            {sidebar === false ? <AiOutlineMenu /> : <AiOutlineArrowLeft />}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;
