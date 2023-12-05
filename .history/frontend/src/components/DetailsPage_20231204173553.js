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
                  className="p-[40px] border border-black"
              ></img>
          </div>
      <Footer></Footer>
    </div>
  );
}

export default DetailsPage;
