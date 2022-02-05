import * as React from "react";
import { Link } from 'react-router-dom';
import './dashboard.css'

export default function Dashboard(props) {
  
  return (
    <>
      <DashboardLayout/>
    </>
  );
}

function DashboardLayout(props) {
  
  
  return (
    <>
      <div class="homeGridContainer">
        <div class="navContainer">
          
          <div class="navLinksContainer">
            
            <Link to="/">
              <NavIcon fontAwesomeClass="fas fa-users-cog fa-lg"></NavIcon>
            </Link>
            <NavLogo imgUrl="https://cdn.glitch.me/fea7fde8-57e1-4435-99fe-ed5de69518d2%2Fspotify-logo-01.png?v=1638573704461"/>

          </div>
        </div>
        <div class="detailContainer">
          
        </div>
        <div class="contentContainer">
          
        </div>
      </div>
    </>
  );
  
}

function NavIcon(props) {
  return (
    <div class="navIconContainer" onClick={props.onClick}>
      <i class={props.fontAwesomeClass}></i>
    </div>
  );
}

function NavLogo(props) {
  
  return (
    
    <div class="navIconContainer" onClick={props.onClick}>
      <img className="logoImage" src={props.imgUrl}></img>
    </div>
  );
}
