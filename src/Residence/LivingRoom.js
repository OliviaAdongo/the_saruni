import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function LivingRoom() {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="container">
      <div className="living-left">
        <div className="top">
          <p>LOGO</p>
          <p>THE RESIDENCES</p>
        </div>
        <div className="center">
          <h4>LIVING AREA</h4>
          <h4>BEDROOMS</h4>
          <h4>KITCHEN</h4>
        </div>
        <div className="bottom-left">
          <h4>DISCLAIMER</h4>
          <p>
            These 3 & 2 bedroom aparment artistic impressions or image renders
            contained on this website are for illustrative purposes only and
            should not be relied upon as being complete or accurate
          </p>
        </div>
      </div>
      <div className="living-right">
        <p>Here will be an image</p>
      </div>
      <div className="living-bottom">
        <div className="living-bottom-left">
          {" "}
          3 Bedroom apartment living area example
        </div>
        <div className="living-bottom-right">
          {" "}
          2 bedroom apartment living area example
        </div>
        <button   onClick={() => {
          navigate("/amenities");
        }}>Go To Amenities</button>
      </div>
    </div>
    </div>
  );
}

export default LivingRoom;
