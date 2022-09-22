import React, { useState } from "react";
import "./App.css";
import { data as ourData } from "./data";
import data from "./data.json";
import MyTable from "./MyTable";

function App() {
  const [myData, setMyData] = useState(data);

  return (
    <div className="App">
      <MyTable data={myData} />
    </div>
  );
}

export default App;
