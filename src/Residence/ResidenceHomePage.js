import "./Residence.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function ResidenceHomePage() {
  let navigate = useNavigate();
  return (
    <div className="mainn">
      <div className="toppp">
        <Navbar />{" "}
      </div>
      <div className="residence">
        <div className="left">
          <img src="https://i.pinimg.com/564x/81/a2/21/81a22179e3072cbf919c029e6e7da28d.jpg" alt="logo" className="logo"/>
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
        <div className="right">
        <img src="https://i.pinimg.com/564x/81/a2/21/81a22179e3072cbf919c029e6e7da28d.jpg" alt="aptview" className="aptview"/>
        </div>
      </div>
    </div>
  );
}

export default ResidenceHomePage;
