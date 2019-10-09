import React from 'react';
import SearchBar from './components/Dashboard/SearchBar';
import ScoreIcons from './components/Dashboard/ScoreIcons';
import Header from './components/Dashboard/Header';
import './App.css';

export default function App() {
  return (
    <div className="App">

      <Header className="App-header" />
    
      <body>
        
        <SearchBar className="Search-bar"/>
        
        <ScoreIcons />
      </body>
      
    </div>
  );
}

// class SearchContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       thingsToSet: []
//     }
//     this.handleSearchResult = this.handleSearchResult.bind(this);
//   }

//   handleSearchResult (thingsFound) {
//     // do axios
//     this.setState({
//       thingsToSet: thingsFound
//     });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar handleSearchResult={this.handleSearchResult} />
//         <ThingThatRendersShit things={this.state.thingsToSet} />
//       </div>
//     )
//   }


// }