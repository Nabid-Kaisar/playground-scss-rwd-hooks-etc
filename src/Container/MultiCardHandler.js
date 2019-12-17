import React from "react";
import SingleCardView from "../Presentational/singleCardView";
import allImagesArr from "./imageImports";

function MultiCardHandler() {
  const whoFlipped = imgName => {
    console.log(imgName);
  };

  const allCardsJsx = () => {
    let allCardsViewArr = [];

    allImagesArr.forEach((im, idx) => {
      allCardsViewArr.push(
        <SingleCardView
          key={"prim-card-" + idx}
          image={im}
          notifyParent={whoFlipped}
        />
      );
      allCardsViewArr.push(
        <SingleCardView
          key={"sec-card-" + idx}
          image={im}
          notifyParent={whoFlipped}
        />
      );
    });
    return shuffleArr(allCardsViewArr);
  };

  const shuffleArr = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  return (
    <>
      <div className="all-cards-container">{allCardsJsx()}</div>
    </>
  );
}

export default MultiCardHandler;
