import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

function IterinaryShower({ item, planName }) {
  return (
    <div className="bg-white p-[30px] w-[20vw] m-[30px] card rounded-[10px]">
      <p className="font-semibold m-[10px]">{planName}</p>
      <p className="font-medium m-[10px]">{item.duration}</p>
      <p className="font-medium m-[10px]">Cost : &#8377;{item.price}</p>
      <div className="flex flex-row justify-center">
              <span className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-[10px] cursor-pointer"
                  onClick={()=>{}}
              >
          Select
        </span>
      </div>
    </div>
  );
}

function DetailsPage(props) {
  const serverURL = "http://localhost:8000";
  const [iterinaries, setIterinaries] = useState(null);

  function placeMatcher(item) {
    return item.place === props.place.place;
  }

  useEffect(() => {
    axios
      .get(serverURL + "/iterinaries")
      .then((res) => {
        let result = res.data;
        let placeIterinaries = result.filter(placeMatcher);
        setIterinaries(placeIterinaries[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex flex-row bordered-div">
        <div className="flex flex-column p-[40px] w-[60vw]">
          <h2 className="font-bold p-[40px]">
            The destination that you've selected is :
          </h2>
          <br></br>
          <p className="py-[40px] font-semibold text-yellow-500">
            {props.place.place}
          </p>
        </div>
        <img
          src={"http://localhost:8000/" + props.place.imgUrl}
          alt="place-background"
          className="p-[40px] rounded-3xl h-[50vh]"
        ></img>
      </div>
      <div>
        <p className="font-bold text-3xl px-[30px] pt-[30px]">
          Iterinaries available at the location
        </p>
        {iterinaries === null ? (
          <></>
        ) : (
          <div className="flex flex-row justify-evenly">
            <IterinaryShower
              item={iterinaries.plan.standard}
              planName={"Standard"}
              setIterinary={props.setIterinary}
            />
            <IterinaryShower
              item={iterinaries.plan.extended}
              setIterinary={props.setIterinary}
              planName={"Extended"}
            />
            <IterinaryShower
              item={iterinaries.plan.quick}
              planName={"Quick"}
              setIterinary={props.setIterinary}
            />
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DetailsPage;
