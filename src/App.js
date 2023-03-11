import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AmenitiesHomePage from './Amenities/AmenitiesHomePage';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import NeighborhoodHomepage from './Neighborhood/NeighborhoodHomepage';
import ResidenceHomePage from './Residence/ResidenceHomePage';

function App() {
  return (
   <Router>
   <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/residencehomepage'  element={<ResidenceHomePage/>}/>
      <Route path='/amenitieshomepage'  element={<AmenitiesHomePage/>}/>
      <Route path='/neighborhoodhomepage'  element={<NeighborhoodHomepage/>}/>
      <Route path='/residencehomepage'  element={<ResidenceHomePage/>}/>

    </Routes>
   </Router>
  );
}

export default App;
