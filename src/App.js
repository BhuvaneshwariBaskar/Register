import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from "./pages/Register";
import Home from "./pages/Home";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/:id" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
