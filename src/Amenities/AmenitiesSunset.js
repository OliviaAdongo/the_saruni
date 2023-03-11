import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function AmenitiesSunset() {
  let navigate = useNavigate();
  return (
    <div>AmenitiesSunset
    
    <button  onClick={()=>{ navigate('/amenitiesblack')}}>  other amenities EXPLORE MORE</button>
    
    </div>
  )
}

export default AmenitiesSunset