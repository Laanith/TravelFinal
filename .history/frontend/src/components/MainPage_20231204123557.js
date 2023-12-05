import Footer from "./Footer";
import Header from "./Header";
import main from '../images/main.png';


function MainPage(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div className="flex justify-center h-[56vh]">
          <div>
            <img src={main} style={{ width: "40vw" }} alt="main" />
                    <div>
               <h3 className="text-4xl"></h3>
              <p className="text-3xl font-bold text-white mt-12">
                Explore the world with ease! We are your go-to travel and tour
                management website, dedicated to crafting unforgettable journeys
                tailored to your unique desires.
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default MainPage;