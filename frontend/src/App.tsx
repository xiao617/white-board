import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import HeaderBar from './components/HeaderBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <HeaderBar />
        <div className="grid">
          <div className="col-1" />
          <div className="col-10" >
            <Routes>
              <Route path="/" element={<HomePage />}  />
            </Routes>
          </div>
          <div className="col-1" />

        </div>
      </HashRouter>
    </div>
  );
}

export default App;
