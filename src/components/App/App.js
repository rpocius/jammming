import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  function removeTrack(track) {
    setPlaylistTracks(prevTracks => {
      const indexToRemove = prevTracks.findIndex(t => t.id === track.id);

      if (indexToRemove !== -1) {
        const newPlaylist = [...prevTracks.slice(0, indexToRemove), ...prevTracks.slice(indexToRemove + 1)];
        return newPlaylist;
      }

      return prevTracks;
    });
  };

  function updatePlaylistName(name) {
    setPlaylistName(name);
  };

  function savePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri);
    let name = playlistName;

    Spotify.savePlaylist(name, trackURIs)
      .then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      })
      .catch(error => {
        console.error("Error saving playlist:", error);
      });
  };

  function search(term) {
    if (term !== "") {
    Spotify.search(term).then((result) => setSearchResults(result));
    }
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
