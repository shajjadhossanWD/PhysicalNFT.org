import React from 'react';
import {NavLink, Route, Routes } from 'react-router-dom';
import Activity from './Activity/Activity';
import Community from './Community/Community';
import Documentation from './Documentation/Documentation';
import HelpCenter from './HelpCenter/HelpCenter';
import Newsletter from './Newsletter/Newsletter';
import Ranking from './Ranking/Ranking';
import './Editor.css';

const Editor = () => {
const navLinkStyles =({isActive})=>{
    return{
        backgroundColor: isActive? '#484082#' : '',
    }
}

    return (
        <div>
        <h4 className='text-start text-white'>Editor</h4>
           <div className="editorDiv">
               <div className="row">
                   <div className="col-lg-4">
                   <div className='editorList'>
                         
                          <NavLink to=""
                          style={navLinkStyles}
                          >
                             <button className='pt-4'>Help Center </button>
                          </NavLink><br />
                        
                          <NavLink to="newsletter"
                          style={navLinkStyles}
                          >
                             <button>Newsletter </button>
                          </NavLink><br />
                        
                          <NavLink to="community"
                          style={navLinkStyles}
                          >
                             <button>Community </button>
                          </NavLink><br />
                       
                          <NavLink to="documentation"
                          style={navLinkStyles}
                          >
                             <button> Documentation</button>
                          </NavLink><br />
                      
                        
                          <NavLink to="activity"
                          style={navLinkStyles}
                          >
                             <button> Activity</button>
                          </NavLink><br />
                        
                      
                          <NavLink to="ranking"
                          style={navLinkStyles}
                          >
                             <button>Ranking </button>
                          </NavLink>
                        
                    </div>
                   </div>
                   <div className="col-lg-8">
                   <Routes>
                        <Route path='' element={<HelpCenter/>}/>
                        <Route path='newsletter' element={<Newsletter/>}/>
                        <Route path='community' element={<Community/>}/>
                        <Route path='documentation' element={<Documentation/>}/>
                        <Route path='activity' element={<Activity/>}/>
                        <Route path='ranking' element={<Ranking/>}/>
                    </Routes>

                    <button className='editorBtn'>UPDATE</button>
                   </div>
               </div>
           </div>
           <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
        </div>
    );
};

export default Editor;