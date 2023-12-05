import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
function Records(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex flex-row h-[56vh] form-background">
          <div className="flex flex-col align-middle justify-center mx-auto">
            <p>Here are the final details :</p>
            <p>Iterinary : {props.iterinary.planName}</p>
            <p>Destination : {props.place.place}</p>
            <p>Price : {props.iterinary.price}</p>
            <p>Duration : {props.iterinary.duration}</p>
            <p>Username : {props.user.username}</p>
            <p>Email : {props.user.email}</p>
          </div>
          <div className="bg-black bg-opacity-50 p-[90px] text-white">
            <p>Some final touches : </p>
            <span>
              {" "}
              <p>Scheduled date is from :</p>
              <input type="date"></input>
                    </span>
                    <span>
                        <p>Number of people opting for the plan : </p>
                        <input className="text-black" type="number"></input>
                    </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Records;