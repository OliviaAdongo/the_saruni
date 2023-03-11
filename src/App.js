import AmenitiesHomePage from './Amenities/AmenitiesHomePage';
import './App.css';
import Home from './Home/Home';
import NeighborhoodHomepage from './Neighborhood/NeighborhoodHomepage';
import ResidenceHomePage from './Residence/ResidenceHomePage';

function App() {
  return (
   <div>
    <Home/>
    <ResidenceHomePage/>
    <AmenitiesHomePage/>
    <NeighborhoodHomepage/>
   </div>
  );
}

export default App;
