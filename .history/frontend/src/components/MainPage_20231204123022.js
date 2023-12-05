import Footer from "./Footer";
import Header from "./Header";


function MainPage(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
            <div className="flex justify-center h-[56vh]">
                <img src={require("../assets/images/mainpage.png")} alt="" />
            </div>
        <Footer></Footer>
      </div>
    );
}

export default MainPage;