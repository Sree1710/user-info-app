import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';
import ViewUser from './Components/ViewUser';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Login/>} />
    <Route path="/a" exact element={<AddUser/>}/>
    <Route path="/s" exact element={<SearchUser/>} />
    <Route path="/v" exact element={<ViewUser/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
