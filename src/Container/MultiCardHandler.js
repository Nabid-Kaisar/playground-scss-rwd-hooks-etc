import React, { Component } from "react";
import SingleCardView from "../Presentational/singleCardView";
import allImagesArr from "./imageImports";
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
  }

  state = {};

  componentDidMount = () => {
    for (let i = 0; i < allImagesArr.length; i++) {
      this.setState({ [extractImgName(allImagesArr[i])]: false });
    }
    this.setState({ currentBuffer: [] });
  };

  addDuplicateImg = allImagesArr => {
    allImagesArr.forEach((img, idx) => {
      this.doubledAllImagesArr.push(`${img}_dup`);
    });
  };

  whoFlipped = (imgName, sameImgCount) => {
    console.log(imgName, sameImgCount);
    this.addToCurrentBuffer(imgName, sameImgCount); //this.addto...
  };

  addToCurrentBuffer = (imgName, sameImgCount) => {
    let currentBuffer = [...this.state.currentBuffer];
    currentBuffer.push(imgName, sameImgCount);

    if (currentBuffer.length === 2) {
      this.setState({ currentBuffer }, () => {
        // console.log(this.state.currentBuffer);
      });
    } else {
      //first check is for image name
      //second check is for img uniqueness check
      if (
        currentBuffer[0] === currentBuffer[2] &&
        currentBuffer[1] !== currentBuffer[3]
      ) {
        //update hero match = true
        //flush currentBuffer
        this.setState({ [imgName]: true, currentBuffer: [] }, () => {
          // console.log(this.state.currentBuffer, this.state[imgName]);
        });
      } else {
        //flush currentBuffer
        this.setState({ currentBuffer: [] }, () => {
          // console.log(this.state.currentBuffer, this.state[imgName]);
        });
      }
    }
  };

  allCardsJsx = () => {
    let allCardsViewArr = [];

    this.shuffledDoubledAllImagesArr.forEach((im, idx) => {
      let imgName = extractImgName(im); //cleaned images name

      if (im.endsWith("_dup")) {
        im = im.slice(0, im.length - 4); //removing _dup str at last

        allCardsViewArr.push(
          <SingleCardView
            matched={this.state[imgName]}
            key={"sec-card-" + idx}
            image={im}
            sameImgCount={2}
            notifyParent={this.whoFlipped}
          />
        );
      } else {
        allCardsViewArr.push(
          <SingleCardView
            matched={this.state[imgName]}
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
        <div className="all-cards-container">{this.allCardsJsx()}</div>
      </>
    );
  }
}

export default MultiCardHandler;
