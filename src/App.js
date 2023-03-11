import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amenities from "./Amenities/Amenities";
import AmenitiesBlack from "./Amenities/AmenitiesBlack";
import AmenitiesDetails from "./Amenities/AmenitiesDetails";
import AmenitiesHomePage from "./Amenities/AmenitiesHomePage";
import AmenitiesSunrise from "./Amenities/AmenitiesSunrise";
import AmenitiesSunset from "./Amenities/AmenitiesSunset";
import Courtyard from "./Amenities/Courtyard";
import Gym from "./Amenities/Gym";
import "./App.css";
import Home from "./Home/Home";
import Neighborhood from "./Neighborhood/Neighborhood";
import NeighborhoodHomepage from "./Neighborhood/NeighborhoodHomepage";
import NeighborhoodMap from "./Neighborhood/NeighborhoodMap";
import Bedroom from "./Residence/Bedroom";
import Kitchen from "./Residence/Kitchen";
import LivingRoom from "./Residence/LivingRoom";
import ResidenceHomePage from "./Residence/ResidenceHomePage";
import Residences from "./Residence/Residences";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residencehomepage" element={<ResidenceHomePage />} />
        <Route path="/amenitieshomepage" element={<AmenitiesHomePage />} />
        <Route
          path="/neighborhoodhomepage"
          element={<NeighborhoodHomepage />}
        />
        {/* RESIDENCE ROURES */}
        <Route path="/residence" element={<Residences />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />

        {/* AMENITIES ROUTES */}
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/sunrise" element={<AmenitiesSunrise />} />
        <Route path="/sunset" element={<AmenitiesSunset />} />
        <Route path='/amenitiesblack'  element={<AmenitiesBlack/>}/>
        <Route path='/courtyard'  element={<Courtyard/>}/>
        <Route path='/gym'  element={<Gym/>}/>
        <Route path='/details'  element={<AmenitiesDetails/>}/>


        {/* NEIGHBORHOOD ROUTES */}
        <Route path='/neighborhood'  element={<Neighborhood/>}/>
        <Route path='/map'  element={<NeighborhoodMap/>}/>
      </Routes>
    </Router>
  );
}

export default App;
