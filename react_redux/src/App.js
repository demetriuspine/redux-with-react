import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import store from './store';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Provider store={ store }>
          <header className="header">
            <h1>TrybeFlix</h1>
          </header>
          <main className="App-main">
            <Player />
            <Sidebar />
          </main>
        </Provider>
      </div>
    );
  }
}

export default App;
