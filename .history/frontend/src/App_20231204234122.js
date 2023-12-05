import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import { useState } from 'react';
import MainPage from './components/MainPage';
import DetailsPage from './components/DetailsPage';
import Records from './components/Records';
import Trains from './components/Trains';
import Hotels from './components/Hotels';



function App() {

  const [user, setUserData] = useState(null);
  const [place, setSelectedPlace] = useState(null);
  const [iterinary, setIterinary] = useState(null);
  const [train, setTrain] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [finalDetails, setFinalDetails] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/login"
          element={<Login user={user} setUserData={setUserData}></Login>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/mainpage"
          element={
            <MainPage
              user={user}
              setSelectedPlace={setSelectedPlace}
              place={place}
            ></MainPage>
          }
        ></Route>
        <Route
          path="/detailsPage"
          element={
            <DetailsPage
              place={place}
              setIterinary={setIterinary}
              iterinary={iterinary}
            ></DetailsPage>
          }
        ></Route>
        <Route
          path="/records"
          element={
            <Records
              place={place}
              user={user}
              iterinary={iterinary}
              finalDetails={finalDetails}
              setFinalDetails={setFinalDetails}
            ></Records>
          }
        ></Route>
        <Route
          path="/bookings"
          element={
            <Hotels place={place} user={user} train={train} setHotel={setHotel}></Hotels>
          }
        ></Route>
        <Route
          path="/transport"
          element={
            <Trains place={place} user={user} setTrain={setTrain}></Trains>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
