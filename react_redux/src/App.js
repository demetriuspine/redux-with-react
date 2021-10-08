import React from 'react';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="header">
          <h1>TrybeFlix</h1>
        </header>
        <main class="App-main">
          <Player />
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default App;
