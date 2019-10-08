import React from 'react';
import logo from './logo.svg';
import SearchBar from "./components/Dashboard/SearchBar";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="SearchBar">
          <SearchBar />
        </div>
      </header>
      
    </div>
  );
}
