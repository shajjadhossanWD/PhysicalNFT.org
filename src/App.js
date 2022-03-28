import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import AdminDashboard from './component/AdminDashboard/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import Explore from './component/Explore/Explore';
import Art from './component/Explore/Art/Art';
import Music from './component/Explore/Music/Music';
import Video from './component/Explore/Video/Video';
import RealWorld from './component/Explore/RealWorld/RealWorld';
import Activity from './component/Stats/Activity/Activity';
import Rankings from './component/Stats/Rankings/Rankings';
import UserProfile from './component/UserProfile/UserProfile';
import TopCreator from './component/TopCreators/TopCreator';
import Login from './component/Login/Login';
import ForgotLogin from './component/ForgotLogin/ForgotLogin';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/realWorld" element={<RealWorld/>}/>
        <Route path="/topCreators" element={<TopCreator/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/rankings" element={<Rankings/>}/>
        <Route path="/user/*" element={<UserProfile/>}/>
        <Route path="/admin/*" element={<AdminDashboard />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot_password" element={<ForgotLogin/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
