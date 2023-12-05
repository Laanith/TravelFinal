function Card({ item }) {
    console.log("http://localhost:8000/" + item.imgUrl);
    return (
      <div className="m-[30px] bg-yellow-50">
            <div className="w-[20vw]">
          <img src={"http://localhost:8000/" + item.imgUrl} alt="destination" />
        </div>
      </div>
    );
}

export default Card;