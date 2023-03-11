import "./Neighborhood.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Neighborhood() {
  let navigate = useNavigate();
  return (
    <div>
    <div><Navbar/></div>
      <p>LOGO</p>
      <p>The Neighborhood</p>
      <p>AN EXCLUSIVE ADDRESS</p>
      <h5>
        Coddled by nature on the edge of Nairobi River, 'The Saruni', is a
        tranquil refuge located on Nairobi's coveted Riverside Drivee; A
        secluded preference for embasies, diplomatic organizations and
        professional companies. Riverside drove is a premium expression of
        privacy, prestige and convenience.{" "}
      </h5>

      <button
        onClick={() => {
          navigate("/map");
        }}
      >
        EXPLORE MORE go to map
      </button>
    </div>
  );
}

export default Neighborhood;
