import './Amenities.css'
import { useNavigate } from 'react-router-dom';


function AmenitiesBlack() {
  let navigate = useNavigate();
  return (
    <div>AmenitiesBlack
    <button  onClick={()=>{ navigate('/gym')}}>EXPLORE MORE go to gym</button>
    </div>
  )
}

export default AmenitiesBlack