import React from "react";
import "./Playlist.css"
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist(props) {
  
  function handleNameChange(event) {
    props.onNameChange(event.target.value)
  }

    return (
        <div className="Playlist">
          <input
            onChange={handleNameChange}
            value={props.name}
            defaultValue={"New Playlist"}
          />
          <Tracklist
            isRemoval={true}
            onRemove={props.onRemove}
            tracks={props.playlistTracks}
          />
          <a className="Playlist-save" onClick={props.onSave}>
            SAVE TO SPOTIFY
          </a>
        </div>
      );
}