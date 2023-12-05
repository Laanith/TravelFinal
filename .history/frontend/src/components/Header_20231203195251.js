function Header() {
  return (
    <div className="block w-[100vw] p-[30px] h-[20vh] header">
      <div className="flex flex-row justify-between">
        <div className="logodiv">
          <h3 className="font-medium text-black text-5xl">
            Go
            <span className="text-yellow-400">Trip</span>
          </h3>
        </div>
        <div className="linksdiv">
          <ul className="flex flex-row">
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
