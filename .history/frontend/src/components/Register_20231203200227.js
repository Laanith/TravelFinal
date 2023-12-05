import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

const serverURL = 'http://localhost:8000'



function Register() {

  function sendDetails() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    const DataToSend = {
      "username": username,
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
        <div name="form" className="flex justify-center bg-slate-500 h-[55vh]">
          <div className="m-auto">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="form-input"
            ></input>
            <br></br>
            <input
              name="password"
              type="text"
              placeholder="password"
              className="form-input"
            ></input>
            <br></br>
            <button
              name="submit"
              className="bg-emerald-600 text-white px-[30px] py-[10px] rounded-2xl"
              onClick={() => {
                sendDetails();
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Register;