import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  function sendDataforLogin()

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
              autoComplete="off"
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
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 font-medium"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
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



