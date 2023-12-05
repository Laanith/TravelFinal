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
                        <p className="text-3xl font-bold text-white mt-12">{props.title}</p>
                    </div>
                </div>
            </div>
        <Footer></Footer>
      </div>
    );
}

export default MainPage;