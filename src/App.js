import React from 'react';
import SearchBar from './components/Dashboard/SearchBar';
import ScoreIcons from './components/Dashboard/ScoreIcons';
import Header from './components/Dashboard/Header';
import ExtractedText from './components/Dashboard/ExtractedText';
import './App.css';

export default function App() {
  return (
    <div className="App">

      <Header className="App-header" />
    
      <body>
        
        <SearchBar className="Search-bar"/>
        
        <ScoreIcons />
        <ExtractedText />
      </body>
      
    </div>
  );
}

