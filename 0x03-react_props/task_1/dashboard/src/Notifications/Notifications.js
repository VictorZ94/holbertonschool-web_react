import React from 'react';
import './Notifications.css'
import {getLatestNotification} from '../utils/utils'


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
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent'>
                    <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Notifications;
