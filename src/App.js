
import './App.css';
import Prenavbar from "./Prenavbar.js"
import Navbar from "./Navbar.js"
import Slider from "./slider.js"
import {BrowserRouter as Router} from "react-router-dom"
import data from "./data/data.json"
import Offers from "./offers.js"

function App() {
  return (

    <Router>
     <Prenavbar/>
     <Navbar/>
     <Slider start={data.banner.start} />
     <Offers start={data.offers}/>
         </Router>
  
  );
}

export default App;
