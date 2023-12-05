import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function HotelDetails({ item, setHotel, hotel }) {

    const navigate = useNavigate(); 
        useEffect(() => {
          if (hotel) {
            navigate("/records");
          }
        }, [navigate, hotel]);
  return (
    <div className="text-black bg-white m-[30px] my-[50px] p-[40px] flex flex-row justify-center">
      <img
        src={"http://localhost:8000/" + item.imgUrl}
        className="p-[30px]"
        alt="hotel-img"
      ></img>
      <div className="flex flex-col justify-evenly">
        <p className="m-auto">
          <strong>Hotel Name : </strong>
          {" " + item.hotel}
        </p>
        <p className="m-auto">
          <strong>Price :</strong>
          {" " + item.price}
        </p>
        <span
          className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-auto cursor-pointer"
          onClick={() => {
            setHotel(item);
          }}
        >
          Select
        </span>
      </div>
    </div>
  );
}

function Hotels(props) {

    const navigate = useNavigate();
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
      <div className="flex flex-row bordered-div">
        <div className="p-[40px] w-[60vw]">
          <div>
            <h2 className="font-bold p-[10px]">
              The destination that you've selected is :{" "}
              <span className="text-yellow-500">{props.place.place}</span>
            </h2>
          </div>
          <div>
            <h2 className="font-bold p-[10px]">
              Train :{" "}
              <span className="text-yellow-500">{props.train.train_name}</span>
            </h2>
          </div>
          <div>
            <h2 className="font-bold p-[10px]">
              Stay type :{" "}
              <span className="text-yellow-500">
                {props.iterinary.planName}
              </span>
            </h2>
          </div>
          <div>
            <h2 className="font-bold p-[10px]">
              Stay duration:{" "}
              <span className="text-yellow-500">
                {props.iterinary.duration}
              </span>
            </h2>
          </div>
        </div>
      </div>
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
                hotel={props.hotel}
              ></HotelDetails>
            );
          })}
      </div>
      <div className="flex flex-row justify-center">
        <span
          className="bg-black block w-[10%] justify-center mx-auto text-center text-white py-[5px] rounded-[10px] m-[10px] cursor-pointer"
          onClick={() => {
            navigate("/detailsPage");
            props.setTrain(null);
          }}
        >
          Go Back
        </span>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Hotels;
