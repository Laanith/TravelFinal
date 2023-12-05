import Footer from "./Footer";
import Header from "./Header";

function DetailsPage(props) {
  console.log(props.place);
  return (
    <div className="flex flex-col w-full">
      <Header></Header>
          <div>
              <img src={'http://localhost:8000/'+props.place.imgUrl} alt="place-background" style={{width : '100vw', filter : 'blur(10px)'}}></img>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DetailsPage;
