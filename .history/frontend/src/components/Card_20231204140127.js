function Card({ item }) {
    
    const imgStyles = {

    }
  console.log("http://localhost:8000/" + item.imgUrl);
  return (
    <div className="m-[30px] bg-yellow-50">
      <div className="w-[30vw]">
              <img src={"http://localhost:8000/" + item.imgUrl}
                  style={{objectFit : 'contain'}}
                  alt="destination" />
      </div>
    </div>
  );
}

export default Card;
