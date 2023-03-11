import './Amenities.css'
import { useNavigate } from 'react-router-dom';


function AmenitiesDetails() {
  let navigate = useNavigate();
  return (
    <div>AmenitiesDetails  at a glance
    <button  onClick={()=>{ navigate('/neighborhood')}}>EXPLORE MORE</button>
    </div>
  )
}

export default AmenitiesDetails