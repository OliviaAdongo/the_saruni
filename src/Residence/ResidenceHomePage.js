import "./Residence.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function ResidenceHomePage() {
  let navigate = useNavigate();
  return (
    <div className="mainn">
     
        <Navbar />{" "}
      
      <div className="residence">
        <div className="left">
          <div className="forstyle">
            <img
              src="https://i.pinimg.com/564x/81/a2/21/81a22179e3072cbf919c029e6e7da28d.jpg"
              alt="logo"
              className="logo"
            />
            <h4>RESIDE IN LUXURY</h4>
            <h5> surrounded by spectacular views</h5>
            <button
              onClick={() => {
                navigate("/residence");
              }}
            >
              THE RESIDENCES
            </button>
          </div>
        </div>
        <div className="right-side-residence">
          <img
            src="https://i.pinimg.com/564x/81/a2/21/81a22179e3072cbf919c029e6e7da28d.jpg"
            alt="aptview"
            className="aptview"
          />
        </div>
      </div>
    </div>
  );
}

export default ResidenceHomePage;
