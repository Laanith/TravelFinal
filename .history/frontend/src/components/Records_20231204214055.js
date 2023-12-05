import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
function Records(props) {
  function showDetails() {
    let date = document.getElementById("date").value;
    let numPeople = document.getElementById("num-people").value;
    //   console.log('Date :', date, typeof date);
    //   console.log("Number :", numPeople, typeof numPeople);
    const finalDetails = {
      username: props.user.username,
      email: props.user.email,
      date: date,
      number_of_people: numPeople,
      place: props.place.place,
      plan: props.iterinary.planName,
      price: props.iterinary.price,
      duration: props.iterinary.duration,
      grand_total: numPeople * props.iterinary.price,
    };
    console.log("FinalDetails :", finalDetails);
    props.setFinalDetails(finalDetails);
  }

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex flex-row h-[56vh] form-background">
        {props.finalDetails === null ? (
          <div className="flex flex-col align-middle justify-center mx-auto">
            <p>Here are the final details :</p>
            <p>Iterinary : {props.iterinary.planName}</p>
            <p>Destination : {props.place.place}</p>
            <p>Price : {props.iterinary.price}</p>
            <p>Duration : {props.iterinary.duration}</p>
            <p>Username : {props.user.username}</p>
            <p>Email : {props.user.email}</p>
          </div>
        ) : (
          <div className="flex flex-col align-middle justify-center mx-auto">
            <p>Summary :</p>
            <p>Iterinary : {props.finalDetails.plan}</p>
            <p>Destination : {props.finalDetails.place}</p>
            <p>Price : {props.finalDetails.price}</p>
            <p>Duration : {props.finalDetails.duration}</p>
            <p>Username : {props.finalDetails.username}</p>
            <p>Email : {props.finalDetails.email}</p>
            <p>Number of people travelling : {props.finalDetails.email}</p>
                          <p>Grand Total : {props.finalDetails.grand_total}</p>
                          <p className="text-green-500 font-bold">Link for payment and collection of co-traveller information is sent to your email</p>
          </div>
              )}
              <br></br>
              
              {finalDetails === null ? 
                  
        }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Records;
