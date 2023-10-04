import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Login/>} />
    <Route path="/a" exact element={<AddUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
