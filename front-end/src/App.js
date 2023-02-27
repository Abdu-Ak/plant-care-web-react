
import './App.css';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Home from './pages/User/home'
import ShowLogin from './context/loginContext';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminUser from './pages/Admin/AdminUser';
function App() {
  const token = localStorage.getItem("token")
  return (
    <div>
  
     <ShowLogin>
      <BrowserRouter>
     <Routes>
     <Route exact path='/'  element={ <Home/> } />


     
     <Route exact path='/admin'  element={ token ? <Navigate to={'/admin/dashboard'}/>  : <Login/> } />
     <Route exact path='/admin/dashboard'  element={ token ? <Dashboard/>: <Navigate to={"/admin"} />} />
     <Route exact path='/admin/usermanage'  element={ token ?  <AdminUser/> : <Navigate to={"/admin"} />} />
     
     </Routes>
     </BrowserRouter>
     </ShowLogin>
     
    </div>
  );
}

export default App;

