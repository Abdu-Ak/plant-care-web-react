
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/User/home'
import ShowLogin from './context/loginContext';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminUser from './pages/Admin/AdminUser';
function App() {
  return (
    <div>
  
     <ShowLogin>
      <BrowserRouter>
     <Routes>
     <Route exact path='/'  element={ <Home/> } />
     <Route exact path='/admin'  element={ <Login/> } />
     <Route exact path='/admin/dashboard'  element={ <Dashboard/>} />
     <Route exact path='/admin/usermanage'  element={ <AdminUser/>} />
     
     </Routes>
     </BrowserRouter>
     </ShowLogin>
     
    </div>
  );
}

export default App;

