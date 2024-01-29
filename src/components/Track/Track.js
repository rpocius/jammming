import React, { useRef } from "react";
import "./Track.css";

export default function Track(props) {

  function addTrack() {
    props.onAdd(props.track);
  }

  function removeTrack() {
    props.onRemove(props.track);
  }

  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  }

  const audioElementRef = useRef(null);

  function handleHover() {
    if (props.track.previewURL) {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }

      const audioElement = new Audio(props.track.previewURL);
      audioElement.play().catch(error => {
        console.error('Error playing audio:', error);
      });

      audioElementRef.current = audioElement;
    }
  }

  function handleMouseLeave() {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
  }

  return (
    <div className="Track">
      <div className="img-div">
        <img src={props.track.imgURL} alt={props.track.name} className="track-img" />
      </div>
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {props.track.previewURL && (
        <button
          className="play-pause"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          {'\u23EF'}
        </button>
      )}
      {renderAction()}
    </div>
  );
};