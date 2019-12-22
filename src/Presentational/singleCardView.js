//takes image as prop, and notifyParent function.
//render the image in the back of flippable card
//notify the parent about which card was clicked
//card can be perma flipped by props.matched=true

import React, { useState, useRef } from "react";
import dota2logo from "../resources/images/dota2logo.jpg";
import PropTypes from "prop-types";
import { extractImgName } from "../util/utilFn";

export default function SingleCardView(props) {
  // const [isFlipped, doFlip] = useState(false);
  const flipCardInnerNode = useRef(null);
  const heroImgNode = useRef(null);

  const handleFlip = () => {
    // doFlip(true);
    flipCardInnerNode.current.classList.add("flip-card-inner-transform");

    props.notifyParent(heroImgNode.current.name, props.sameImgCount);

    setTimeout(() => {
      // doFlip(false);
      console.log(props.matched);
      if (!props.matched) {
        flipCardInnerNode.current.classList.remove("flip-card-inner-transform");
      }
    }, 800);
  };

  const extractImgName = () => {
    return props.image
      .split("\\")
      .pop()
      .split("/")
      .pop()
      .split("_")[0];
  };

  return (
    <>
      {/* {console.log(props)} */}
      <div className="flip-card">
        <div
          id="inner"
          className={
            props.matched
              ? "flip-card-inner flip-card-inner-transform"
              : "flip-card-inner"
          }
          ref={flipCardInnerNode}
        >
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
            <img
              className="card-img"
              src={props.image}
              name={extractImgName(props.image)}
              alt={extractImgName(props.image)}
              ref={heroImgNode}
            />
          </div>
        </div>
      </div>
    </>
  );
}

SingleCardView.propTypes = {
  image: PropTypes.string.isRequired,
  notifyParent: PropTypes.func,
  matched: PropTypes.bool
};
