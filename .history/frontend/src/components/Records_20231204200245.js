import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
function Records(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex justify-center h-[56vh] form-background">
          <p>Here are the final details :</p>
          <p>Iterinary : {props.iterinary.planName}</p>
          <p>Destination : {props.place.place}</p>
          <p>Price : {props.iterinary.price}</p>
          <p>Price : {props.iterinary.price}</p>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Records;