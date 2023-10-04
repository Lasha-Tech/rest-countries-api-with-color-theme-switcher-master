import { useState } from "react";
import Country from "./Country";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [day, setDay] = useState(true);

  return (
    <BrowserRouter>
    <div
      className="App"
      style={{ backgroundColor: day ? "#FAFAFA" : "#202C36" }}
    >
      {/* Header  */}
      <Header day={day} click={() => setDay(!day)}/>

      {/* Main  */}
      <Home day={day}/>

      {/* Route  */}
      <Routes>
        <Route path="/" element={<Navigate to='/Home'/>}/>
        <Route path="/Country/:name"
        element={<Country day={day}/>}
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


