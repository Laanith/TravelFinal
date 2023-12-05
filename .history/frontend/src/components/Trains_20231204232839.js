import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState, useEffect } from 'react';


function TrainDetails({ item }) {
    return (
      <div className="text-black bg-white">
            <p>{item.train_name}</p>
            <p>{item.train_number}</p>
      </div>
    );
}


function Trains(){
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/trains")
            .then((res) => { setTrainData(res.data) })
            .catch((err)=>{console.error(err)})
    }, [])


    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex flex-col justify-center h-[56vh] form-background"
            >
                {trainData && 
                    (
                    trainData.map((item)=>{return <TrainDetails item={item}></TrainDetails>})
                )}
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Trains;