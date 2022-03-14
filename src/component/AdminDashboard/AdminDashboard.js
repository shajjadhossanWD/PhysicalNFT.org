import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './AdminDashboard.css';
import logo from  './logo1.png'
import Admin from './Admin/Admin';
import Dashboard from './Dashboard/Dashboard';
import { Divider } from '@mui/material';
import Creator from './Creator/Creator';
import Collections from './Collections/Collections';
import NFTs from './NFTs/NFTs';
import Tokens from './Tokens/Tokens';
import Editor from './Editor/Editor';
import AddNewCollection from './Collections/AddNewCollection/AddNewCollection';
// import Dashboard from './Dashboard/Dashboard';
// import Admin from './Admin/Admin';
import profileImg from './maleprofile.jpg';
import AdminProfile from './AdminProfile/AdminProfile';
import UpdateCollection from './Collections/UpdateCollection/UpdateCollection';
import UpdateCreator from './Creator/UpdateCreator/UpdateCreator';
import UpdateNFTs from './NFTs/UpdateNFTs/UpdateNFTs';

const menuLinkStyles =({isActive})=>{
  return{
      backgroundColor: isActive? '#1A1C33' : '',
  }
}
const drawerWidth = 240;
function AdminDashboard(props) {
//   let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div className='sideBar'>
      <Toolbar />
    
      <img className='dashLogo' src={logo} alt="" />
      <Divider/>
       <div className="menuDiv">
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="dashboard"> <span className='navIconAdmin'><i className="fas fa-th-large"></i></span> Dashboard</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="adminUser"> <span className='navIconAdmin'><i className="fas fa-user"></i></span>  Admin</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="creator"> <span className='navIconAdmin'><i className="fas fa-user-friends"></i></span> Creators</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="collections"> <span className='navIconAdmin'><i className="fas fa-tags"></i></span> Collections</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="nfts"> <span className='navIconAdmin'><i className="fas fa-check-circle"></i></span> NFTs</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="tokens"> <span className='navIconAdmin'><i className="fas fa-circle"></i></span> Tokens</NavLink><br />
       <NavLink className="dashboardMenu" style={menuLinkStyles} to="editor"> <span className='navIconAdmin'><i className="fas fa-pen-alt"></i></span> Editor</NavLink><br />

       </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const menuToggle = () =>{
    const toggleMenu = document.querySelector('.adminProfile');
    toggleMenu.classList.toggle('active')
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
         className='dashboardNav'
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='dashboardTopBar'>
            <h4>Dashboard</h4>
             <div className="profile">
              <div className="imgDashDiv" onClick={menuToggle}>
                <img src={profileImg} alt="" />
              </div>
            </div> 
          </Typography>
        
        </Toolbar>
         <div className="adminProfile">
              <Link to="/home">Admin Name</Link><br />
              <hr />
              <Link to="admin" className='mb-3 d-flex'><i className="fas fa-user me-2"></i>  Profile</Link>
              <p className='text-start'><i className="fas fa-sign-out-alt"></i> log Out</p>
            </div> 
      </AppBar>
   
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        
        
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        className=' dashboardDiv'
      >
        <Toolbar />
        <div className="contentDiv">
         <Routes>
             <Route path='adminUser' element={<Admin/>}/>
             <Route path='' element={<Dashboard/>}/>
             <Route path='dashboard' element={<Dashboard/>}/>
             <Route path='creator/*' element={<Creator/>}/>
             <Route path='collections/*' element={<Collections/>}/>
             <Route path='nfts/*' element={<NFTs/>}/>
             <Route path='tokens' element={<Tokens/>}/>
             <Route path='editor/*' element={<Editor/>}/>
             <Route path='collections/newCollection' element={<AddNewCollection/>}/>
             <Route path="admin" element={<AdminProfile/>} />
             <Route path="collections/updateCollection/:id" element={<UpdateCollection/>}/>
             <Route path="creator/updateCreator/:id" element={<UpdateCreator/>}/>
             <Route path="nfts/updateNFTs/:id" element={<UpdateNFTs/>}/>

         </Routes>
         </div>
      </Box>
    </Box>
  );
}

AdminDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminDashboard;
