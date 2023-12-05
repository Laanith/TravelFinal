import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
const serverURL = 'http://localhost:8000'



function Register() {


  

  function sendDetails() {
    var username = document.getElementsByName("username")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    const DataToSend = {
      "username": username,
      "email":email,
      "password" : password
    }
    axios
      .post(serverURL + "/register", DataToSend)
      .then((response) => {
        console.log(response.data);
      })
      .catch(
        (err)=>{console.error(err)}
      );
    
      

    }





    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex justify-center h-[56vh] form-background"
        >
          <div className="m-auto flex flex-col justify-center align-middle">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-input"
                required={true}
                autoComplete="off"
              ></input>
              <br></br>
              <input
                name="email"
                type="text"
                placeholder="Email"
                required={true}
                className="form-input"
              ></input>
              <br />
              <input
                name="password"
                type="text"
                placeholder="Password"
                required={true}
                className="form-input"
              ></input>
              <br></br>
              <button
                name="submit"
                className="bg-emerald-600 text-white form-button"
                onClick={() => {
                  sendDetails();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Register;