import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

function BookingViewer({ item, bookingsToDelete, setBookingsToDelete }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    let original = [...bookingsToDelete];
    if (!original.includes(item._id)) {
      original.push(item._id);
    }
    setBookingsToDelete(original);

    setIsClicked(true); // Update state to indicate the click

  };

  const spanStyle = {
    // Define your styles here
    backgroundColor: isClicked ? 'red' : 'transparent',
    color: isClicked ? 'white' : 'red',
    // Other styles
  };
  




  return (
    <div className="inline-block w-[30%] bg-white card rounded-[0.5em] text-[12px] p-[50px] mx-[10px]">
      <div className="h-[10%] flex">
        <span
          className="text-red-600 font-bold border-red-600 border-2 self-end ml-auto p-[4px] cursor-pointer"
          onClick={handleClick}
          style={spanStyle}
          > Delete
        </span>
      </div>
      <p>Booking ID : {item._id}</p>
      <p>
        <strong>Booking Date :</strong> {item.booking.date}
      </p>
      <p>
        <strong>Cost :</strong> {item.booking.grand_total}
      </p>
      <p>
        <strong>Location :</strong> {item.booking.place}
      </p>
      <p>
        <strong>People :</strong> {item.booking.number_of_people}
      </p>
      <p>
        <strong>Duration :</strong> {item.booking.duration}
      </p>
    </div>
  );
}

function ViewBookings(props) {
  const [allBookings, setAllBookings] = useState(null);
  const [bookingsToDelete, setBookingsToDelete] = useState([]);


  useEffect(() => {
    if (bookingsToDelete.length) {
      console.log(bookingsToDelete)
    }
  }, [bookingsToDelete]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/allUserBookings", props.user)
      .then((res) => {
        setAllBookings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);



  function sendDataToDelete() {
    axios.post("http://localhost:8000/deleteBookings", bookingsToDelete)
      .then((res) => { console.log(res.data) })
      .catch((err) => { console.log(err) });
    
    axios
      .post("http://localhost:8000/allUserBookings", props.user)
      .then((res) => {
        setAllBookings(res.data);
        setBookingsToDelete([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

    useEffect(() => {
      console.log("allBookings updated:", allBookings);
    }, [allBookings]);


  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      <Header></Header>
      <div className="flex flex-row justify-around gap-4 p-4 flex-wrap border-t-2 border-gray-500 w-[100vw]">
        {allBookings &&
          allBookings.map((item) => {
            return (
              <BookingViewer
                item={item}
                bookingsToDelete={bookingsToDelete}
                setBookingsToDelete={setBookingsToDelete}
              />
            );
          })}
      </div>
      {bookingsToDelete.length === 0 ? (
        <></>
      ) : (
          <span className="bg-black p-[15px] w-fit justify-center mx-auto text-center text-white py-[5px] rounded-[10px] m-[10px] cursor-pointer"
            onClick={() => {
              sendDataToDelete();
            }}
          >Save</span>
      )}
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ViewBookings;



// function ViewBookings(props) {
//   const [allBookings, setAllBookings] = useState([]);
//   const [selectedBookings, setSelectedBookings] = useState([]);

//   useEffect(() => {
//     axios
//       .post("http://localhost:8000/allUserBookings", props.user)
//       .then((res) => {
//         setAllBookings(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [props]);

//   function toggleSelection(bookingId) {
//     setSelectedBookings((prevSelected) => {
//       if (prevSelected.includes(bookingId)) {
//         return prevSelected.filter((id) => id !== bookingId);
//       } else {
//         return [...prevSelected, bookingId];
//       }
//     });
//   }

//   function sendDataToDelete() {
//     axios
//       .post("http://localhost:8000/deleteBookings", selectedBookings)
//       .then((res) => {
//         console.log(res.data); // Log backend response
//         // Update UI: Fetch bookings again after deletion
//         axios
//           .post("http://localhost:8000/allUserBookings", props.user)
//           .then((res) => {
//             setAllBookings(res.data);
//             setSelectedBookings([]); // Clear selected bookings
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div className="flex flex-col w-full min-h-[100vh]">
//       <Header />
//       <div className="flex flex-row justify-around gap-4 p-4 flex-wrap border-t-2 border-gray-500 w-[100vw]">
//         {allBookings.map((item) => (
//           <BookingViewer
//             key={item._id}
//             item={item}
//             isSelected={selectedBookings.includes(item._id)}
//             toggleSelection={toggleSelection}
//           />
//         ))}
//       </div>
//       {selectedBookings.length > 0 && (
//         <span
//           className="bg-black p-[15px] w-fit justify-center mx-auto text-center text-white py-[5px] rounded-[10px] m-[10px] cursor-pointer"
//           onClick={sendDataToDelete}
//         >
//           Save
//         </span>
//       )}
//       <div className="mt-auto">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ViewBookings;
