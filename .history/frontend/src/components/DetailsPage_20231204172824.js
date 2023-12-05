import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div>
          <h2 className="font-medium">Details of the destination you selected :</h2>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default DetailsPage;