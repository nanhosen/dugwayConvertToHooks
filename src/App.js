import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header'
import { Home } from './components/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//        <Header />
//        <Home />
//       </div>
//     );
//   }
// }

export default App;
