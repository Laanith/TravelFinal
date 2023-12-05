import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
  console.log(props.place);
  return (
    <div className="flex flex-col w-full">
      <Header></Header>
          <div className="flex flex-row">
              <img src={'http://localhost:8000/' + props.place.imgUrl}
                  alt="place-background"
                  className="p-[40px] border-2 border-b-gray-700 bg-white"
              ></img>
          </div>
      <Footer></Footer>
    </div>
  );
}

export default DetailsPage;
