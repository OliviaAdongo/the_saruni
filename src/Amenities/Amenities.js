import "./Amenities.css";
import { useNavigate } from "react-router-dom";

function Amenities() {
  let navigate = useNavigate();
  return (
    <div className="parent-container-amenities">
      <div className="left-amenities">
        <p>LOGO</p>
        <p> THE AMENITIES</p>
        <h3>CAREFULLY CONSIDERED & METICULOUSLY DESIGNED</h3>
        <h5>
          With uninterrupted views from each appartment, 'The Saruni' at
          Riverside Drive, is a mordern interpreetation of contemporary luxury
          specifically designed to enhance your living experience{" "}
        </h5>
      </div>
      <div className="right-amenities">IMAGE HERE</div>
      <div className="bottom-amenities">
        {" "}
        <button
          onClick={() => {
            navigate("/sunrise");
          }}
        >
          Check sunrise
        </button>
      </div>
    </div>
  );
}

export default Amenities;
