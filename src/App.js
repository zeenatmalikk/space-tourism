import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Destination from "./Component/Destination/Destination";
import SpaceLaunch from "./Component/Launch/Space-Launch";
import CrewPage from "./Component/Crew/CrewPage";
import CrewContainer from "./Component/Crew/CrewContainer";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/launch" element={<SpaceLaunch/>} />
          <Route path="/crew" element={<CrewContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
