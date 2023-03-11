import './Amenities.css'
import { useNavigate } from 'react-router-dom';

function AmenitiesHomePage() {
  let navigate = useNavigate();
  return (
    <div className="amenities">
    <div className="left">
      <p>logo</p>
      <h4>AMENITIES</h4>
      <h5> surround lorem ipsum lorem ipsum</h5>
      <button  onClick={()=>{ navigate('/amenities')}}>THE AMENITIES</button>
    </div>
    <div className="right">
      <p>There is  an image here</p>
    </div>
  </div>
  );
}

export default AmenitiesHomePage;
