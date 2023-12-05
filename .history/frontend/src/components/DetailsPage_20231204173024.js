import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
    console.log(props.place);
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
            <div className="w-full" style={{ backgroundImage: 'url(' + props.place.imgUrl+')'}}>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default DetailsPage;