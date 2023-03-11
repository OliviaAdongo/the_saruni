import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function AmenitiesHomePage() {
  let navigate = useNavigate();
  return (
    <div className="amenities">
    <div className="left">
      <p>logo</p>
      <h4>A LIFESTYLEE METICULOUSLY CURATED</h4>
      <h5> for the most discerning urban connoiseur</h5>
      <button  onClick={()=>{ navigate('/amenities')}}>THE AMENITIES</button>
    </div>
    <div className="right">
      <p>There is  an image here</p>
    </div>
  </div>
  );
}

export default AmenitiesHomePage;
