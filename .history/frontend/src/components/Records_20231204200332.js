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
          <p>Duration : {props.iterinary.duration}</p>
          <p>Username : {props.user.username}</p>
          <p>Email : {props.user.email}</p>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Records;