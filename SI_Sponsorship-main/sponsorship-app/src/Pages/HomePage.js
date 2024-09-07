import React from 'react';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import './HomePage.css'; 
import store from '../Images/store.png'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <img src={store} style={{width:"75%", height:"400px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"10px", margin:"auto" }} alt='store banner' />
      
    <div className="home-page">
      
      <div className="home-content">
        <h2>Welcome to the Sponsorship Management</h2>
        <p>
          This application allows you to view and manage sponsorship data.
          Navigate through the application to view the sponsor data or add new sponsorships.
        </p>
       
      </div>
    </div></div>
  );
};

export default HomePage;
