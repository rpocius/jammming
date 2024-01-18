import React from "react";
import "./Track.css";

export default function Track(props) {

  function addTrack(props){
    props.onAdd(props.track)
  }
    
  function removeTrack(props) {
    props.onRemove(props.track);
  }
    
  function renderAction() {
        if (props.isRemoval) {
          return (
            <a className="Track-action" onClick={removeTrack}>
              -
            </a>
          );
        } else {
          return (
            <a className="Track-action" onClick={addTrack}>
              +
            </a>
          );
        }
      }

    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>
              {props.track.artist} | {props.track.album}
            </p>
          </div>
          <a className="Track-action">+</a>
        </div>
      );
};