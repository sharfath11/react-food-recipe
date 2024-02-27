import React from "react";
import Menu from "./components/Menu";
import "./App.scss";
import { BrowserRouter,} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
