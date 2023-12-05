import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";

function HotelDetails({ item, setHotel}) {
  return (
    <div className="text-black bg-white m-[30px] my-[50px] flex flex-col justify-center">
      <p >
        <strong>Train Name : </strong>
        {item.hotel}
      </p>
      <p >
        <strong>Price :</strong>
        {item.price}
      </p>
          <img
              
              src={"http://localhost:8000/" + item.imgUrl}
              alt="hotel-img"
          >
      </img>
      <span
        className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-auto cursor-pointer"
        onClick={() => {
          setHotel(item);
        }}
      >
        Select
      </span>
    </div>
  );
}

function Hotels(props) {
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/hotels")
      .then((res) => {
        setHotelData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div
        name="form"
        className="flex flex-row justify-center h-[56vh] form-background"
      >
        {hotelData &&
          hotelData.map((item) => {
            return (
              <HotelDetails
                item={item}
                setHotel={props.setHotel}
              ></HotelDetails>
            );
          })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Hotels;
