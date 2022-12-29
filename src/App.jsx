/*

1. you guys can see the comments yes or no 

2 .let's remove everything fromh the main page 
3 what we' ll do we will create multiple componet and laod it first 


*/

import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <input
        name="data"
        value={data}
        placeholder="Please enter USER/ADMIN"
        onChange={(e) => setData(e.target.value)}
      />

      <Home data={data} />
    </div>
  );
}

export default App;
