import Footer from "./Footer";
import Header from "./Header";
import main from "../images/main.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function MainPage(props) {
  const [destinationData, setDestinationData] = useState(null);
  useEffect(() => {
    const serverURL = "http://localhost:8000";
    axios
      .get(serverURL + "/destinations")
      .then((res) => {
        setDestinationData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setDestinationData]);

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex flex-row justify-center form-background">
        <img
          src={main}
          style={{ width: "40vw", display: "inline" }}
          alt="main"
        />
        <div className="flex flex-col justify-center w-[60vw] bg-black bg-opacity-50 p-[30px] m-[50px] rounded-3xl">
          <h3 className="text-4xl font-semibold">
            Best Vacation Destination for You !
          </h3>
          <p className="text-xl font-medium text-white text-stroke mt-12">
            Explore the world with ease! We are your go-to travel and tour
            management website, dedicated to crafting unforgettable journeys
            tailored to your unique desires.
          </p>
        </div>
      </div>
      <div>
        {destinationData === null ? (
          <></>
        ) : (
          <>
            <div>
              <p className="font-bold text-3xl px-[30px] pt-[30px]">
                Available Destinations
              </p>
            </div>
            <div className="flex w-full overflow-x-auto card-shower">
              {destinationData.map((item) => {
                return <Card item={item}></Card>;
              })}
            </div>
          </>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
