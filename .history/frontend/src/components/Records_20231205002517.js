import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
function Records(props) {


  useEffect(() => {
    console.log('User', props.user);
    console.log("Train", props.train);
    console.log("Iterinary", props.iterinary);
  })




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
            <p className="font-semibold">Here are the final details :</p>
            <p>
              <strong>Iterinary : </strong>
              {props.iterinary.planName}
            </p>
            <p>
              <strong>Destination : </strong>
              {props.place.place}
            </p>
            <p>
              <strong>Price : </strong>
              {props.iterinary.price}
            </p>
            <p>
              <strong>Duration : </strong>
              {props.iterinary.duration}
            </p>
            <p>
              <strong>Username : </strong>
              {props.user.username}
            </p>
            <p>
              <strong>Email : </strong>
              {props.user.email}
            </p>
          </div>
        ) : (
            <div className="flex flex-col align-middle justify-center mx-auto">
              <p className="font-semibold">Summary :</p>
              <p>
                <strong>Iterinary : </strong>
                {props.finalDetails.plan}
              </p>
              <p>
                <strong>Destination : </strong>
                {props.finalDetails.place}
              </p>
              <p>
                <strong>Price : </strong>
                {props.finalDetails.price}
              </p>
              <p>
                <strong>Duration : </strong>
                {props.finalDetails.duration}
              </p>
              <p>
                <strong>Username : </strong>
                {props.finalDetails.username}
              </p>
              <p>
                <strong>Email : </strong>
                {props.finalDetails.email}
              </p>
              <p>
                <strong>Number of people travelling : </strong>
                {props.finalDetails.number_of_people}
              </p>
              <p>
                <strong>Grand Total : </strong>
                {props.finalDetails.grand_total}
              </p>
              <p className="text-green-800 font-bold">
                <strong className="text-black mx-[5px]">Message : </strong>Link
                for payment and collection of co-traveller information is sent
                to your email
              </p>
            </div>
        )}

        {props.finalDetails === null ? (
          <div className="bg-black bg-opacity-50 p-[90px] text-white">
            <p className="text-3xl font-bold">Some final touches : </p>
            <form>
              <span className="block">
                {" "}
                <p>Scheduled date is from :</p>
                <input
                  type="date"
                  id="date"
                  className="text-black form-inputwhite"
                ></input>
              </span>
              <span className="block">
                <p>Number of people opting for the plan : </p>
                <input
                  className="text-black form-input white"
                  type="number"
                  id="num-people"
                  defaultValue={1}
                ></input>
              </span>
              <div>
                <span
                  className="bg-black block w-[30%] justify-center mx-auto text-center text-white py-[5px] rounded-[10px] m-[10px] cursor-pointer"
                  onClick={(event) => {
                    event.preventDefault();
                    showDetails();
                  }}
                >
                  Proceed
                </span>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Records;
