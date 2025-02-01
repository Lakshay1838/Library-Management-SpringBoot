import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

const App = () => {
  
  return (
    <div className="bg-cover bg-center min-h-screen bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524578271613-d550eacf6090')" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
