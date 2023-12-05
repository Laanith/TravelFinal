import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function TrainDetails({ item, setTrain, train }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (train) {
            navigate("/detailsPage");
        }
    }, [train, navigate])


    return (
      <div className="text-black bg-white m-[30px] my-[50px] h-[30vh] w-[20vw] flex flex-col justify-center">
        <p className="m-[10px]">
          <strong>Train Name : </strong>
          {item.train_name}
        </p>
        <p className="m-[10px]">
          <strong>Train Number : </strong>
          {item.train_number}
        </p>
        <p className="m-[10px]">
          <strong>Minimum price : Rs.</strong>
          {item.minimum_price}
        </p>
        <span
          className="bg-black text-white px-[15px] py-[5px] rounded-[10px] m-auto cursor-pointer"
          onClick={() => {
            setTrain(item);
          }}
        >
          Select
        </span>
      </div>
    );
}


function Trains(props){
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/trains")
            .then((res) => { setTrainData(res.data) })
            .catch((err)=>{console.error(err)})
    }, [])


    return (
      <div className="flex flex-col w-full">
            <Header></Header>
            <div className="flex flex-col justify-center text-center">Details of selected destination :
                <p>{props.place.place}</p>
            </div>
        <div
          name="form"
          className="flex flex-row justify-center h-[56vh]"
            >
                {trainData && 
                    (
                    trainData.map((item)=>{return <TrainDetails item={item} setTrain={props.setTrain} train={props.train}></TrainDetails>})
                )}
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Trains;