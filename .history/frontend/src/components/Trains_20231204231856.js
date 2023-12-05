import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState , useEffect} from 'react';


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
          className="flex justify-center h-[56vh] form-background"
            >
                {trainData && 
                    (
                    <div></div>
                )}
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Trains;