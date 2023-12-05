import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";

function TrainDetails({ item, setTrain }) {
  return (
    <div className="text-black bg-white m-[30px] my-[50px] h-[30vh] w-[20vw] flex flex-col justify-center">
      <p className="m-[10px]">
        <strong>Train Name : </strong>
        {item.train_name}
      </p>
      <p className="m-[10px]">
        <strong>Train Number : </strong>
        {item.train_number}
      </p>
      <p className="m-[10px]">
        <strong>Minimum price : Rs.</strong>
        {item.minimum_price}
      </p>
      <span
        className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-auto cursor-pointer"
        onClick={() => {
          setTrain(item);
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
      .get("http://localhost:8000/trains")
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
              <TrainDetails
                item={item}
                setTrain={props.setTrain}
              ></TrainDetails>
            );
          })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Hotels;
