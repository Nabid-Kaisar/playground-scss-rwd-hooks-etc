import React, { Component } from "react";
import SingleCardView from "../Presentational/singleCardView";
import allImagesArr from "./imageImports";

import { connect } from "react-redux";
import {
  defineInitialArr,
  addToCurrentBuffer
} from "../actions/ActionCreateor";
import { bindActionCreators } from "redux";
import { extractImgName } from "../util/utilFn";

class MultiCardHandler extends Component {
  constructor(props) {
    super(props);

    props.defineInitialArr(allImagesArr);
  }

  whoFlipped = (imgName, sameImgCount) => {
    console.log(imgName, sameImgCount);
    this.props.addToCurrentBuffer(imgName, sameImgCount);
  };

  allCardsJsx = () => {
    let allCardsViewArr = [];
    console.log(this.props);
    allImagesArr.forEach((im, idx) => {
      let imgName = extractImgName(im);

      allCardsViewArr.push(
        <SingleCardView
          matched={this.props.matchArray[imgName]}
          key={"prim-card-" + idx}
          image={im}
          sameImgCount={1}
          notifyParent={this.whoFlipped}
        />
      );
      allCardsViewArr.push(
        <SingleCardView
          matched={this.props.matchArray[imgName]}
          key={"sec-card-" + idx}
          image={im}
          sameImgCount={2}
          notifyParent={this.whoFlipped}
        />
      );
    });
    return this.shuffleArr(allCardsViewArr);
  };

  shuffleArr = a => {
    console.log("shuffle");
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    return (
      <>
        <div className="all-cards-container">{this.allCardsJsx()}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { matchArray: state.matchArray };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      defineInitialArr,
      addToCurrentBuffer
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiCardHandler);
