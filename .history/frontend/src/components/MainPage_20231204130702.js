import Footer from "./Footer";
import Header from "./Header";
import main from "../images/main.png";

function MainPage(props) {



    useState(() => {
        
    }, []);



  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex flex-row justify-center form-background">
        <img
          src={main}
          style={{ width: "40vw", display: "inline" }}
          alt="main"
        />
        <div className="flex flex-col justify-center w-[60vw]">
          <h3 className="text-4xl font-semibold">
            Best Vacation Destination for You !
          </h3>
          <p className="text-xl font-medium text-white text-stroke mt-12">
            Explore the world with ease! We are your go-to travel and tour
            management website, dedicated to crafting unforgettable journeys
            tailored to your unique desires.
          </p>
              </div>

              <div>
                  
              </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
