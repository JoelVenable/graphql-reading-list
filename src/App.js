import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookList } from './components/BookList';

export const App = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <h1>Reading List</h1>
      <BookList />

    </div>
  );
}

