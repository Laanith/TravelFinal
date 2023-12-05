import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState, useEffect } from 'react';


function TrainDetails({ item }) {
    return (
      <div className="text-black bg-white m-[30px] my-[50px] h-[20vh]">
        <p className="m-[10px]">{item.train_name}</p>
        <p className="m-[10px]">{item.train_number}</p>
        <p className="m-[10px]">{item.minimum_price}</p>
        <span
          className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-[10px] cursor-pointer"
          onClick={() => {
            setIterinary(item);
          }}
        >
          Select
        </span>
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
          className="flex flex-row justify-center h-[56vh] form-background"
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