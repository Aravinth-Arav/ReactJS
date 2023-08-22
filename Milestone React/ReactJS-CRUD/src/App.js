import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './components/regform/login/login';
import { RegForm } from './components/regform/regform.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ViewDetails } from './components/conn/conn';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<LogIn/>]}/> 
      <Route path='/regform' element={[<RegForm/>]}/>
      <Route path='/dashboard' element={[<ViewDetails/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;