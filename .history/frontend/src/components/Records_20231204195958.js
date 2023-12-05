import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
function Records(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex justify-center h-[56vh] form-background"
        >
          <div className="m-auto flex flex-col justify-center align-middle">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-input"
                required={true}
                autoComplete="off"
              ></input>
              <br></br>
              <input
                name="email"
                type="text"
                placeholder="Email"
                required={true}
                className="form-input"
                autoComplete="off"
              ></input>
              <br />
              <input
                name="password"
                type="text"
                placeholder="Password"
                required={true}
                className="form-input"
              ></input>
              <br></br>
              <button
                name="submit"
                className="bg-emerald-600 text-white form-button"
                onClick={(event) => {
                  event.preventDefault();
                  sendDetails();
                }}
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

export default Records;