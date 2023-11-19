import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JAMMMING APP</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
      </header>
    </div>
  );
}

export default App;
