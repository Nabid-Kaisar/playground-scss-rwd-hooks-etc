import React, { Component } from "react";
import SingleCardView from "../Presentational/singleCardView";
import StopWatchView from "../Presentational/StopWatchView";
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

    this.doubledAllImagesArr = allImagesArr;
    this.addDuplicateImg(allImagesArr);
    this.shuffledDoubledAllImagesArr = this.shuffleArr(
      this.doubledAllImagesArr
    );
    console.log(this.shuffledDoubledAllImagesArr);

    props.defineInitialArr(allImagesArr);
  }

  addDuplicateImg = allImagesArr => {
    allImagesArr.forEach((img, idx) => {
      this.doubledAllImagesArr.push(`${img}_dup`);
    });
  };

  whoFlipped = (imgName, sameImgCount) => {
    console.log(imgName, sameImgCount);
    this.props.addToCurrentBuffer(imgName, sameImgCount);
  };

  allCardsJsx = () => {
    let allCardsViewArr = [];
    console.log(this.props);
    this.shuffledDoubledAllImagesArr.forEach((im, idx) => {
      let imgName = extractImgName(im); //cleaned images name

      if (im.endsWith("_dup")) {
        im = im.slice(0, im.length - 4); //removing _dup str at last

        allCardsViewArr.push(
          <SingleCardView
            matched={this.props.matchArray[imgName]}
            key={"sec-card-" + idx}
            image={im}
            sameImgCount={2}
            notifyParent={this.whoFlipped}
          />
        );
      } else {
        allCardsViewArr.push(
          <SingleCardView
            matched={this.props.matchArray[imgName]}
            key={"prim-card-" + idx}
            image={im}
            sameImgCount={1}
            notifyParent={this.whoFlipped}
          />
        );
      }
    });
    return allCardsViewArr;
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
        <div className="all-cards-container">
          {this.allCardsJsx()}
          <StopWatchView />
        </div>
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
