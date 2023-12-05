import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
    const [trainData, setTrainData] = useState()
    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex justify-center h-[56vh] form-background"
        >
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Trains;