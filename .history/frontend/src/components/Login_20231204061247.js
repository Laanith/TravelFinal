// import Footer from "./Footer";
// import Header from "./Header";


// function Login() {
//     return (
//       <div className="flex flex-col w-full">
//         <Header></Header>
//         <div
//           name="form"
//           className="flex justify-center h-[56vh] form-background"
//         >
//           <div className="m-auto flex flex-col justify-center align-middle p-[100px] border-4 blur-[1px]">
//             <form className="">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="form-input"
//                 required={true}
//               ></input>
//               <br></br>
//               <input
//                 name="password"
//                 type="text"
//                 placeholder="Password"
//                 required={true}
//                 className="form-input"
//               ></input>
//               <br></br>
//               <button
//                 name="submit"
//                 className="bg-emerald-600 text-white form-button"
//                 onClick={() => {
//                 }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//         <Footer></Footer>
//       </div>
//     );
// }

// export default Login;



import Footer from "./Footer";
import Header from "./Header";

function Login() {
  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex justify-center h-[56vh]">
        {/* Separate div for the blurred background */}
        <div className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-[1px]"></div>

        <div className="relative z-10 m-auto flex flex-col justify-center align-middle p-[100px] border-4">
          <form className="">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-input"
              required={true}
            ></input>
            <br></br>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required={true}
              className="form-input"
            ></input>
            <br></br>
            <button
              name="submit"
              className="bg-emerald-600 text-white form-button"
              onClick={() => {}}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
