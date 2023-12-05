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
                        href="/login"
              className="bg-emerald-600 text-white form-button"
            >
              Login
            </a>
            <br></br>
                    <a
                        href="/register"
              name="submit"
              className="bg-emerald-600 text-white form-button"
              onClick={() => {}}
            >
              Submit
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default LandingPage;