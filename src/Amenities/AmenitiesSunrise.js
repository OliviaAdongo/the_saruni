import "./Amenities.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AmenitiesSunrise() {
  let navigate = useNavigate();
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <div>
        <p>LOGO</p>
        <p>THE SPECTACULAR SKYGARDENS</p>
        <h3>Wake up to the sunrise on the east</h3>
        <h3> THE EASTWARD GARDEN</h3>
        <h4>
          is located on the 9th and 10th floor and presents amazing views of the
          Nairobi CBD area
        </h4>
      </div>
      <div>
        image here
      </div>
      <button
        onClick={() => {
          navigate("/sunset");
        }}
      >
        Check the sunset
      </button>
    </div>
   </div>
  );
}

export default AmenitiesSunrise;
