import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </Router>
  );
};

export default App;

// login/signup
//  
