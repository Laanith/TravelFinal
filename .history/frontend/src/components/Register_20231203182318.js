import axios from 'axios';
import Footer from './Footer';

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
      <div name="form" className="justify-center bg-slate-500">
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
    );
}

export default Register;