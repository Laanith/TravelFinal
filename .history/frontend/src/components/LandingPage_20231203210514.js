import Footer from "./Footer";
import Header from "./Header";



function LandingPage() {
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex justify-center h-[56vh] form-background"
        >
          <div className="m-auto flex flex-col justify-center align-middle">
            <a
              name="submit"
              className="bg-emerald-600 text-white form-button"
              onClick={() => {}}
            >
              Submit
            </a>
            <br></br>
            <button
              name="submit"
              className="bg-emerald-600 text-white form-button"
              onClick={() => {}}
            >
              Submit
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default LandingPage;