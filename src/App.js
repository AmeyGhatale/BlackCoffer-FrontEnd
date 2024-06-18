// import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './layout/Navbar';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">

//       <Navbar />
//       <Home />

//     </div>
//   );
// }

// export default App;
















import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EndYearFilter from "./Filters/EndYearFilter";
import Sidenav from "./layout/SideNav";
import CityChart from "./charts/CityChart";

import CountryChart from "./charts/CountryChart";
import IntensityChart from "./charts/IntensityChart";
import LikelihoodChart from "./charts/LikelihoodChart";
import RegionChart from "./charts/RegionChart";
import RelevanceChart from "./charts/RelevanceChart";
import TopicChart from "./charts/TopicChart";
import YearChart from "./charts/YearChart";

function App() {
  return (
    <div className="App">
      <Router>

        <Sidenav />

        {/* <Navbar /> */}

        <CityChart />
        <CountryChart />
        <IntensityChart />
        <LikelihoodChart />
        <RegionChart />
        <RelevanceChart />
        <TopicChart />
        <YearChart />

      </Router>
    </div>
  );
}

export default App;