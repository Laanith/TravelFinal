import Footer from "./Footer";
import Header from "./Header";

function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <div name="form" className="flex justify-center h-[56vh] form-background">
        <div className="m-auto flex flex-row justify-center">
          <a
            href="/login"
            className="bg-emerald-600 text-white form-button text-center pt-[10px] redirect-btn"
          >
            Login
          </a>
          <hr className="rotate-90 w-[10px] text-gray-500 bg-gray-500"></hr>
          <a
            href="/register"
            className="bg-emerald-600 text-white form-button text-center pt-[10px] redirect-btn"
          >
            Register
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
