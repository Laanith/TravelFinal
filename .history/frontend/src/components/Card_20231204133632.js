function Card({ item }) {
    console.log("http://localhost:8000/" + item.imgUrl);
    return <div className="m-[30px] bg-yellow-50">
        <img src={"http://localhost:8000/" + item.imgUrl} alt="destination"/>
    </div>;
}

export default Card;