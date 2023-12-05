function Card({item}) {
    return <div className="m-[30px] bg-yellow-50">
        <img src={"https://localhost:8000/" + item.imgUrl}
    </div>;
}

export default Card;