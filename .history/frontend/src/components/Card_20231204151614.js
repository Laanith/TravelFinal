function Card({ item }) {
    
    const imgStyles = {

    }
  console.log("http://localhost:8000/" + item.imgUrl);
  return (
    <div className="m-[30px] bg-yellow-50 p-[30px]">
      <div className="w-[20vw]">
        <img
          src={"http://localhost:8000/" + item.imgUrl}
          style={{ objectFit: "contain" }}
          alt="destination"
        />
      </div>
      <div className="p-[10px]">
        <p className="font-medium">{item.place}</p>
        <p>&#8377;{item.cost}</p>
        <p>{item.duration}</p>
      </div>
    </div>
  );
}

export default Card;
