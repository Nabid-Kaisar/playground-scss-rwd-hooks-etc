import React, { useState, useRef } from "react";

import allImages from "./imageImports";
import ReactCardFlip from "react-card-flip";
import dota2logo from "../resources/images/dota2logo.jpg";

export default function SingleCardView(props) {
  const [isFlipped, doFlip] = useState(false);
  const flipCardInnerNode = useRef(null);

  const handleFlip = () => {
    doFlip(true);
    flipCardInnerNode.current.classList.add("flip-card-inner-transform");

    props.notifyParent("asd");

    setTimeout(() => {
      doFlip(false);
      flipCardInnerNode.current.classList.remove("flip-card-inner-transform");
    }, 800);
  };

  const extractImgName = () => {
    // Object.keys(props.image,)
    // console.log(props.image);
  };

  return (
    <>
      <div className="flip-card">
        {extractImgName()}
        <div id="inner" className="flip-card-inner" ref={flipCardInnerNode}>
          <div className="flip-card-front">
            <img
              src={dota2logo}
              onClick={handleFlip}
              name="dota2logo"
              alt="dota 2 logo"
              className="card-img"
            />
          </div>
          <div id="back" className="flip-card-back">
            <img className="card-img" src={props.image} />
          </div>
        </div>
      </div>
    </>
  );
}
