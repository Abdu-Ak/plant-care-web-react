
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import ShowLogin from './context/loginContext';
function App() {
  return (
    <div>
  
     <ShowLogin>
      <BrowserRouter>
     <Routes>
     <Route exact path='/'  element={ <Home/> } />
     </Routes>
     </BrowserRouter>
     </ShowLogin>
     
    </div>
  );
}

export default App;

