import React from "react";
import "./ProfileCard.css";
// import { Card, Icon, Image } from 'react';

class ProfileCard extends React.Component {
    
    render() {
        return (
            
            <div className="card">
                <h1 className="pic">pic</h1>
                <div className="middle" >
                    <h1 className="name"> name</h1>
                    <h3 className="create">date it was creaded</h3>
                    <p className="bio">bio /hi</p>
                </div>
                <div>
                    <button className="delete" on onClick="-----">DELETE</button>
                    </div>
               </div>
       
            );
        }
    }
    
    export default ProfileCard
   
  
  