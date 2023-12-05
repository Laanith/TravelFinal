import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import { useState } from 'react';
import MainPage from './components/MainPage';

function App() {

  const [user, setUserData] = useState(null);
  const [place, setSelectedPlace] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/login"
          element={<Login user={user} setUserData={setUserData}></Login>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mainpage" element={<MainPage user={user} setSelectedPlace={setSelectedPlace}></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
