import './Amenities.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function AmenitiesDetails() {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
    <p>Amenities at a glance</p>
    <button  onClick={()=>{ navigate('/neighborhood')}}>EXPLORE MORE</button>
    </div>
    </div>
  )
}

export default AmenitiesDetails