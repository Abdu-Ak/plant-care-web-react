
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
import GroupChatPage from './pages/User/GroupChatPage';
import ShowView from './context/AdminViewContext';
import AddPostPage from './pages/User/AddPostPage';
import CommunityPage from './pages/User/CommunityPage';
import AdminPost from './pages/Admin/AdminPost';
function App() {
  const token = localStorage.getItem("token")
  const adminToken = localStorage.getItem("adminToken")
  return (
    <>
  
     <ShowLogin>
      <ShowBot>
        <ShowView>
      <BrowserRouter>
     <Routes>
     <Route exact path='/'  element={ <HomePage/> } />
     <Route exact path='/about'  element={ <AboutPage/> } />
     <Route exact path='/community' element={ <CommunityPage/>}/>

     <Route exact path='/profile'  element={token ?  <ProfilePage/> : <Navigate to={'/'} /> } />
     <Route exact path='/editprofile'  element={token ?  <EditProfilePage/> : <Navigate to={'/'} /> } />
     <Route exact  path='/diary' element={token ?  <Diarypage/> : <Navigate to={'/'} />} /> 
     <Route exact  path='/add-diary' element={token ?  <AddDiaryPage/> : <Navigate to={'/'} /> }/> 
     <Route exact path='/add-post' element={token ? <AddPostPage/> : <Navigate to={'/'} />}/>
     
     
     
     <Route exact path='/group-chat' element={ <GroupChatPage/> }/>

     
     <Route exact path='/admin'  element={ adminToken ? <Navigate to={'/admin/dashboard'}/>  : <Login/> } />
     <Route exact path='/admin/dashboard'  element={ adminToken ? <Dashboard/>: <Navigate to={"/admin"} />} />
     <Route exact path='/admin/usermanage'  element={ adminToken ?  <AdminUser/> : <Navigate to={"/admin"} />} />
     <Route exact path='/admin/diarymanage'  element={ adminToken ?  <AdminDiary/> : <Navigate to={"/admin"} />} />
     <Route exact path='/admin/posts'  element={ adminToken ?  <AdminPost/> : <Navigate to={"/admin"} />} />
        



     </Routes>
     </BrowserRouter>
     </ShowView>
     </ShowBot>
     </ShowLogin>    
     
    </>
  );
}

export default App;

