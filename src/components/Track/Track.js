import React from "react";
import "./Track.css";

export default function Track(props) {

  /*  addTrack(event) {
        props.onAdd(props.track);
      }
    
      removeTrack(event) {
        props.onRemove(props.track);
      }
    
      renderAction() {
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
      } */

    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>
              {props.track.artist} | {props.track.album}
            </p>
          </div>
          <a className="Track-action">RenderAction</a>
        </div>
      );
};