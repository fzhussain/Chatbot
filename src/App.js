import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import Enroll from './components/Enroll';
import ExitPage from './components/ExitPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/exitpage" element={<ExitPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

