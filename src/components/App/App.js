import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';



function App() {

const [searchResults, setSearchResults] = useState([
  {
    name: 'Track Name 1',
    artist: 'Artist Name 1',
    album: 'Album 1',
    id: 1
  }, 
  {
    name: 'Track Name 2',
    artist: 'Artist Name 2',
    album: 'Album 2',
    id: 2
  }, 
  {
    name: 'Track Name 3',
    artist: 'Artist Name 3',
    album: 'Album 3',
    id: 3
  }
]);
const [playlistName, setPlaylistName] = useState('New Playlist');
const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: 'Playlist Track Name 4',
    artist: 'Artist Name 4',
    album: 'Album 4',
    id: 4
  }, 
  {
    name: 'Playlist Track Name 5',
    artist: 'Artist Name 5',
    album: 'Album 5',
    id: 5
  }, 
  {
    name: 'Playlist Track Name 6',
    artist: 'Artist Name 6',
    album: 'Album 6',
    id: 6
  }
]);

function addTrack(track) {
  let currentTracks = playlistTracks;
  if (!currentTracks.some(currentTracks => currentTracks.id === track.id)) {
    currentTracks.push(track);
    setPlaylistTracks(currentTracks);
}
};

function removeTrack(track) {
  let currentTracks = playlistTracks;
  setPlaylistTracks(() => currentTracks.filter(
      playListTrack => playListTrack.id !== track.id
    ))
  };

function updatePlaylistName(name) {
  setPlaylistName(name);
};

function savePlaylist() {
  const trackURIs = playlistTracks.map(track => track.uri);
  const name = playlistName;
  Spotify.savePlaylist(name, trackURIs).then(() => {
    setPlaylistName = "New Playlist";
    playlistTracks = [];
  })
};

function search(term) {
  Spotify.search(term).then((result) => setSearchResults(result));
  //console.log(term);
};

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar 
          onSearch={search}
        />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            playlistName={playlistName}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            playlistTracks={playlistTracks}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
