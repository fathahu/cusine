import React from "react";
import "./App.css";
import Todaysp from "./Components/Todaysp";
// import Categorygrid from './Components/Categorygrid'
// import Test from "./Components/Test";
import Newsletter from "./Components/Newsletter"
import Footers from "./Components/Footers";

const App = () => {
  return (
    <div>
      <Todaysp/>
      {/* <Categorygrid/> */}
      {/* <Test/> */}
      <Newsletter/>
      <Footers/>
    </div>
  );
};

export default App;
