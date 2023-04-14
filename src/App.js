import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './pages/Register';
import Display from './pages/Display';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/:id' element={<Display/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
