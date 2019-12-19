import React, { Component } from "react";
import SingleCardView from "../Presentational/singleCardView";
import allImagesArr from "./imageImports";

import { connect } from "react-redux";
import { defineInitialArr } from "../actions/ActionCreateor";
import { bindActionCreators } from "redux";

class MultiCardHandler extends Component {
  constructor(props) {
    super(props);
    console.log("const");
    props.defineInitialArr(allImagesArr.length * 2);
  }

  whoFlipped = (imgName, sameImgCount) => {
    console.log(imgName, sameImgCount);
  };

  allCardsJsx = () => {
    let allCardsViewArr = [];
    console.log(this.props.matchArray);
    allImagesArr.forEach((im, idx) => {
      allCardsViewArr.push(
        <SingleCardView
          matched={this.props.matchArray[idx]}
          key={"prim-card-" + idx}
          image={im}
          sameImgCount={1}
          notifyParent={this.whoFlipped}
        />
      );
      allCardsViewArr.push(
        <SingleCardView
          matched={this.props.matchArray[idx]}
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
      defineInitialArr
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiCardHandler);
