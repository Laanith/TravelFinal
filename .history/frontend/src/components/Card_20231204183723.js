import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Card(props) {
  const serverURL = "http://localhost:8000/";
  
  const navigate = useNavigate();


  useEffect(() => {
    if (props.place) {
      navigate("/detailsPage")
    }
  }, [props.place, navigate])


  return (
    <div
      className="m-[30px] bg-yellow-50 p-[30px] cursor-pointer rounded-[20px] card"
      onClick={() => { props.setSelectedPlace(props.item); navigate("/detailsPage"); }}
    
    >
      <div className="w-[20vw]">
        <img
          src={serverURL + props.item.imgUrl}
          style={{ objectFit: "contain" }}
          alt="destination"
        />
      </div>
      <div className="p-[10px]">
        <p className="font-medium">{props.item.place}</p>
        <p>
          <strong> Minimum Cost : &#8377;</strong>
          {props.item.cost}
        </p>
        <p>
          <span className="font-normal">Minimum Duration : </span>
          {props.item.duration}
        </p>
      </div>
    </div>
  );
}

export default Card;
