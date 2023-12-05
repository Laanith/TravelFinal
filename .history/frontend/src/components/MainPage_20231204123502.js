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
                        
                    </div>
                </div>
            </div>
        <Footer></Footer>
      </div>
    );
}

export default MainPage;