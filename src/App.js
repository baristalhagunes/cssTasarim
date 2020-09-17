import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="menu">
            <ul>
              <li><img className="logo" src={require('./diamond.png')}/></li>
              <li className="active">Home</li>
              <li>BTG</li>
              <li>Contact</li>
                <li><a href="#" className="button-signup" ><span>Sign Up</span></a></li>

            </ul>
          </div>
            <div className="text">
                <div className="app-text">
                    <h1>Lorem Ipsum is simply  the printing and typesetting industry.</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
                <div className="photo">
                    <img src={require('./React.svg.png')}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;