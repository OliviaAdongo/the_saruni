import "./Amenities.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AmenitiesBlack() {
  let navigate = useNavigate();
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div className="parent-container-amenities">
      <div className="left-amenities">
        <p>LOGO</p>
        <p> THE AMENITIES</p>
        <h3>CURATED FOR LEISURE, WELLNESS AND REJUVINATION </h3>
       <h5>The infinity heated swimming pool</h5>
      </div>
      <div className="right-amenities">IMAGE HERE</div>
      <div className="bottom-amenities">
        {" "}
        <button
          onClick={() => {
            navigate("/gym");
          }}
        >
          EXPLORE MORE go to gym
        </button>
      </div>
    </div>
   </div>
  );
}

export default AmenitiesBlack;
