//takes image as prop, and notifyParent function.
//render the image in the back of flippable card
//notify the parent about which card was clicked
//card can be perma flipped by props.matched=true

import React, { Component, useState, useRef } from "react";
import dota2logo from "../resources/images/dota2logo.jpg";
import PropTypes from "prop-types";
import { extractImgName } from "../util/utilFn";

export default class SingleCardView extends Component {
  // const [isFlipped, doFlip] = useState(false);
  // const flipCardInnerNode = useRef(null);
  // const heroImgNode = useRef(null);

  handleFlip = () => {
    this.flipCardInnerNode.classList.add("flip-card-inner-transform");

    this.props.notifyParent(
      this.heroImgNode.name,
      this.props.sameImgCount
    );
    console.log(this.props.matched);
    setTimeout(() => {
      console.log(this.props.matched);
      if (!this.props.matched) {
        // this props is from previous render
        //that's why it is wrong
        this.flipCardInnerNode.classList.remove(
          "flip-card-inner-transform"
        );
      }
    }, 800);
  };

  render() {
    return (
      <>
        {/* {console.log(props)} */}
        <div className="flip-card">
          <div
            id="inner"
            className={
              this.props.matched
                ? "flip-card-inner flip-card-inner-transform"
                : "flip-card-inner"
            }
            ref={node => (this.flipCardInnerNode = node)}
          >
            <div className="flip-card-front">
              <img
                src={dota2logo}
                onClick={this.handleFlip}
                name="dota2logo"
                alt="dota 2 logo"
                className="card-img"
              />
            </div>
            <div id="back" className="flip-card-back">
              <img
                className="card-img"
                src={this.props.image}
                name={extractImgName(this.props.image)}
                alt={extractImgName(this.props.image)}
                ref={node => (this.heroImgNode = node)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

SingleCardView.propTypes = {
  image: PropTypes.string.isRequired,
  notifyParent: PropTypes.func,
  matched: PropTypes.bool
};
