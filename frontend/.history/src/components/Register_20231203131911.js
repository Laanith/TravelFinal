



function Register() {

    function sendDetails() {
        var username = document.getElementsByName("username")[0].value;
        var password = document.getElementsByName("password")[0].value;
        console.log("Username",username);
        console.log("Password", password);
    }





    return (
      <div name="form" className="justify-center bg-slate-500">
        <input
          type="text"
          placeholder="username"
          className="form-input"
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="password"
          className="form-input"
        ></input>
        <br></br>
            <button name="submit"
                className="bg-emerald-600 text-white px-[30px] py-[10px] rounded-2xl"
                onClick={() => { sendDetails()}}
            >Submit</button>
      </div>
    );
}

export default Register;