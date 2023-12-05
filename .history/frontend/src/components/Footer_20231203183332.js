function Footer() {
    return (
      <div className="block h-[30vh] w-[100vw] bg-black text-white">
        <div className="flex flex-row justify-evenly">
          <div className="w-[70%] my-7">
            <p className="text-2xl font-bold">About us</p>
            <br />
            <p>
              At GoTrip, our seasoned team combines a passion for travel with
              expert guidance, ensuring your comfort and safety as you embark on
              incredible adventures. Discover the world your way with us.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold my-7">Branches</p>
            <div>
              <ul>
                <li>Canada</li>
                <li>UK</li>
                <li>Russia</li>
                <li>Dubai</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold my-7">Quick Links</p>
            <div>
              <ul>
                <li>Home</li>
                <li>Contacts</li>
                <li>Packages</li>
                <li>Many more ...</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold my-7">Follow Us</p>
            <div>
              <ul>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;