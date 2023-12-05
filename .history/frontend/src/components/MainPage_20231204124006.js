import Footer from "./Footer";
import Header from "./Header";
import main from '../images/main.png';


function MainPage(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex flex-row justify-center">
            <img src={main} style={{ width: "40vw", display : "inline" }} alt="main" />
                    <div className="flex justify-center w-[60vw]">
               <h3 className="text-4xl font-medium">Best Vacation Destination for You !</h3>
              <p className="text-2xl text-black mt-12">
                Explore the world with ease! We are your go-to travel and tour
                management website, dedicated to crafting unforgettable journeys
                tailored to your unique desires.
              </p>
            </div>
          </div>
        </div>
    );
}

export default MainPage;