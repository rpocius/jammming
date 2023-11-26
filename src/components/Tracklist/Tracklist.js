import React from 'react';
import "./Tracklist.css";
import Track from '../Track/Track';

export default function Tracklist(props) {
    return (
        <div className="TrackList">
          {props.tracks.map(track => (
            <Track
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              track={track}
              isRemoval={props.isRemoval}
              name={track.name}
              key={track.id}
            />
          ))}
        </div>
      );
};