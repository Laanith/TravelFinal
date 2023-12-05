



function Register() {
    return (
      <div name="form" className="mx-auto my-auto block">
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

        <button name="submit">Submit</button>
      </div>
    );
}

export default Register;