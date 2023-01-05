import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import {Route,Routes} from "react-router-dom"
import Edit from './Component/Edit';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element ={<Register/>}/>
    <Route path="/edit/:id" element ={<Edit/>}/>
    </Routes>
   

    </div>
  );
}

export default App;
