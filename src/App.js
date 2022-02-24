import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import AdminDashboard from './component/AdminDashboard/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import Explore from './component/Explore/Explore';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Art from './component/Explore/Art/Art';
import Music from './component/Explore/Music/Music';
import Video from './component/Explore/Video/Video';
import RealWorld from './component/Explore/RealWorld/RealWorld';
import TopCreators from './component/TopCreators/TopCreators';
import Activity from './component/Stats/Activity/Activity';
import Rankings from './component/Stats/Rankings/Rankings';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin/*" element={<AdminDashboard />}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/art" element={<Art/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/realWorld" element={<RealWorld/>}/>
        <Route path="/topCreators" element={<TopCreators/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/rankings" element={<Rankings/>}/>

    </Routes>
    <Footer></Footer>

    </div>
  );
}

export default App;
