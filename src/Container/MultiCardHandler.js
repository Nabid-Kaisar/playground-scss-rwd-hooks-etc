import React, { Component } from "react";
import SingleCardView from "../Presentational/singleCardView";
import allImagesArr from "./imageImports";

import { connect } from "react-redux";
import { defineInitialArr } from "../actions/ActionCreateor";
import { bindActionCreators } from "redux";

class MultiCardHandler extends Component {
  constructor(props) {
    super(props);

    props.defineInitialArr(allImagesArr.length * 2);
  }

  whoFlipped = imgName => {
    console.log(imgName);
  };

  allCardsJsx = () => {
    let allCardsViewArr = [];
    console.log(this.state);
    allImagesArr.forEach((im, idx) => {
      allCardsViewArr.push(
        <SingleCardView
          key={"prim-card-" + idx}
          image={im}
          notifyParent={this.whoFlipped}
        />
      );
      allCardsViewArr.push(
        <SingleCardView
          key={"sec-card-" + idx}
          image={im}
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
  return { matchArr: state.MatchedReducer };
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
