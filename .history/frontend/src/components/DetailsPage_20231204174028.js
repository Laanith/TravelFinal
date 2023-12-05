import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
  console.log(props.place);
  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div className="flex flex-row">
        <div className="flex flex-column p-[40px]  w-[60vw]">
          <h2 className="font-bold p-[40px]">
            The destination that you've selected is :
          </h2>
          <br></br>
          <p>{props.place.place}</p>
        </div>
        <img
          src={"http://localhost:8000/" + props.place.imgUrl}
          alt="place-background"
          className="p-[40px] border-2 border-gray-500 bg-white rounded-3xl"
        ></img>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DetailsPage;
