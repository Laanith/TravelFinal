import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        {/* <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route> */}
        <Route
          path="/project-ideas"
          element={<ProjectIdeas></ProjectIdeas>}
        ></Route>
        <Route path="/github-mock" element={<GithubMock></GithubMock>}></Route>
        <Route
          path="/computer-vision"
          element={<BlogPost_2></BlogPost_2>}
        ></Route>
        <Route path="/cplusplus" element={<BlogPost_3></BlogPost_3>}></Route>
        <Route
          path="/mnist-deployment"
          element={<BlogPost_4></BlogPost_4>}
        ></Route>
        <Route path="/revamp" element={<BlogPost_5></BlogPost_5>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
