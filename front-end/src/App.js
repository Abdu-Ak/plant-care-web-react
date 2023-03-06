
import './App.css';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import ShowLogin from './context/loginContext';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminUser from './pages/Admin/AdminUser';
import HomePage from './pages/User/HomePage';
import AboutPage from './pages/User/AboutPage';
import ShowBot from './context/BotContext';
function App() {
  const token = localStorage.getItem("token")
  return (
    <div>
  
     <ShowLogin>
      <ShowBot>
      <BrowserRouter>
     <Routes>
     <Route exact path='/'  element={ <HomePage/> } />
     <Route exact path='/about'  element={ <AboutPage/> } />
   

     
     <Route exact path='/admin'  element={ token ? <Navigate to={'/admin/dashboard'}/>  : <Login/> } />
     <Route exact path='/admin/dashboard'  element={ token ? <Dashboard/>: <Navigate to={"/admin"} />} />
     <Route exact path='/admin/usermanage'  element={ token ?  <AdminUser/> : <Navigate to={"/admin"} />} />
     
     </Routes>
     </BrowserRouter>
     </ShowBot>
     </ShowLogin>
     
    </div>
  );
}

export default App;

