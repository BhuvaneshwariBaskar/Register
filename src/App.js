import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/home' element={<div>Hello</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
