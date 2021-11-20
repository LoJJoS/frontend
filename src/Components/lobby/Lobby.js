import React from 'react';
import './Lobby.css';

function Lobby() {
    return (
        <>
        <div className="names">
            <div className="row">
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
                <div className="col">
                    <div className="username">Jason</div>
                </div>
            </div>
        </div>

        <button className="startButton" onClick={() => {console.log('TODO')}}>Start</button>
        </>
    );
  }
  
  export default Lobby;