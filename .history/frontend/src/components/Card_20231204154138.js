import { useNavigate } from "react-router-dom";

function Card(props) {
  
  const navigate = useNavigate();


  console.log("http://localhost:8000/" + props.item.imgUrl);
  return (
    <div
      className="m-[30px] bg-yellow-50 p-[30px] cursor-pointer rounded-[20px] card"
      onClick={() => { setSelectedPlace(props.item); navigate("/detailsPage"); }}
    
    >
      <div className="w-[20vw]">
        <img
          src={"http://localhost:8000/" + props.item.imgUrl}
          style={{ objectFit: "contain" }}
          alt="destination"
        />
      </div>
      <div className="p-[10px]">
        <p className="font-medium">{item.place}</p>
        <p>
          <strong> Minimum Cost : &#8377;</strong>
          {item.cost}
        </p>
        <p>
          <span className="font-normal">Minimum Duration : </span>
          {item.duration}
        </p>
      </div>
    </div>
  );
}

export default Card;
