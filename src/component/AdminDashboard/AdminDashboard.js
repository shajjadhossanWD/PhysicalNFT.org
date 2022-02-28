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
import { Link, Route, Routes } from 'react-router-dom';
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
       <p><i className="fad fa-th-large"></i><Link to="">Dashboard</Link></p>
       <p><i className="fas fa-user"></i><Link to="adminUser">Admin</Link></p>
       <p><i className="fas fa-user-friends"></i><Link to="creator">Creators</Link></p>
       <p><i className="fas fa-tags"></i><Link to="collections">Collections</Link></p>
       <p><i className="fas fa-check-circle"></i><Link to="nfts">NFTs</Link></p>
       <p><i className="fad fa-circle"></i><Link to="tokens">Tokens</Link></p>
       <p><i className="fas fa-pen-alt"></i><Link to="editor">Editor</Link></p>

       </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
          <Typography variant="h6" noWrap component="div">
            dashboard
          </Typography>
        </Toolbar>
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
             <Route path='creator' element={<Creator/>}/>
             <Route path='collections/*' element={<Collections/>}/>
             <Route path='nfts' element={<NFTs/>}/>
             <Route path='tokens' element={<Tokens/>}/>
             <Route path='editor/*' element={<Editor/>}/>
             <Route path='collections/newCollection' element={<AddNewCollection/>}/>
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
