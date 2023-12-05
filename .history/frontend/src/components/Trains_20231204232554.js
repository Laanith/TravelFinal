import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState, useEffect } from 'react';


function TrainDetails({ item }) {
    return <p className="text-black">{item.train_names}</p>;
}


function Trains(){
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/trains")
            .then((res) => { console.log(res.data); setTrainData(res.data) })
            .catch((err)=>{console.error(err)})
    }, [])


    return (
      <div className="flex flex-col w-full">
        <Header></Header>
        <div
          name="form"
          className="flex justify-center h-[56vh] form-background"
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