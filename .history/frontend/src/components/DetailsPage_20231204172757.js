import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
    return (
      <div className="flex flex-col w-full">
            <Header></Header>
            <div>
               Details of the destination you selected :
            </div>
        <Footer></Footer>
      </div>
    );
}

export default DetailsPage;