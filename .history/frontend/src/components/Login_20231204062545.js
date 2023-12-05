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
//           <div className="m-auto flex flex-col justify-center align-middle p-[100px] bg-transparent bg-opacity-100">
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
//                 type="password"
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



import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex justify-center h-[56vh] form-background">
        <div className="m-auto flex flex-col justify-center align-middle p-[100px] bg-transparent bg-opacity-100">
          <form className="">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-input"
              required={true}
            ></input>
            <br />
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required={true}
                className="form-input"
              ></input>
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.475 7.53a5 5 0 10-7.07 7.07l1.414 1.414a7 7 0 117.07-7.07l-1.414-1.414zm-1.06 1.06a3 3 0 11-4.243 4.243l1.414 1.414a5 5 0 007.07-7.07l-1.414-1.414z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 4a8 8 0 00-8 8c0 2.137.84 4.12 2.36 5.64l1.415-1.414C3.674 16.187 3 14.18 3 12a6 6 0 1112 0c0 2.18-.674 4.187-1.775 5.83l1.415 1.415A8.001 8.001 0 0010 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <br />
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



