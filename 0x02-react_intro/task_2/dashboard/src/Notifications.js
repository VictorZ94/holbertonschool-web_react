import React from 'react';
import './Notifications.css'

function Notifications() {
    return (
        <div className="Notifications" style={{position: 'relative'}} >
            <button 
                style={{position: 'absolute', right: 5}} 
                arial-label="Close"
                onClick={() => {
                    console.log("Close button has been clicked");
                }}>X
                </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
            </ul>
        </div>
    )
}

export default Notifications;
