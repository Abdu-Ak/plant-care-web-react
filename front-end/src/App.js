
import './App.css';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import ShowLogin from './context/loginContext';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminUser from './pages/Admin/AdminUser';
import HomePage from './pages/User/HomePage';
import AboutPage from './pages/User/AboutPage';
import ShowBot from './context/BotContext';
import ProfilePage from './pages/User/ProfilePage';
import EditProfilePage from './pages/User/EditProfilePage';
import Diarypage from './pages/User/Diarypage';
import AddDiaryPage from './pages/User/AddDiaryPage';
import AdminDiary from './pages/Admin/AdminDiary';
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
     <Route exact path='/profile'  element={token ?  <ProfilePage/> : <Navigate to={'/'} /> } />
     <Route exact path='/editprofile'  element={token ?  <EditProfilePage/> : <Navigate to={'/'} /> } />
    <Route exact  path='/diary' element={token ?  <Diarypage/> : <Navigate to={'/'} />} /> 
     <Route exact  path='/add-diary' element={token ?  <AddDiaryPage/> : <Navigate to={'/'} /> }/> 
     
     
     <Route exact path='/admin'  element={ token ? <Navigate to={'/admin/dashboard'}/>  : <Login/> } />
     <Route exact path='/admin/dashboard'  element={ token ? <Dashboard/>: <Navigate to={"/admin"} />} />
     <Route exact path='/admin/usermanage'  element={ token ?  <AdminUser/> : <Navigate to={"/admin"} />} />
     <Route exact path='/admin/diarymanage'  element={ token ?  <AdminDiary/> : <Navigate to={"/admin"} />} />
        



     </Routes>
     </BrowserRouter>
     </ShowBot>
     </ShowLogin>    
     
    </div>
  );
}

export default App;

