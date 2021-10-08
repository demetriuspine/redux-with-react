import React from 'react';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import categories from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: categories
    }
  }
  render(){
    const { categories } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h1>TrybeFlix</h1>
        </header>
        <main class="App-main">
          <Player />
          <Sidebar categories={ categories } />
        </main>
      </div>
    );
  }
}

export default App;
