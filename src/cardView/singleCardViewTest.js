import React from "react";
import SingleCardView from "./singleCardView";
import allImagesArr from "./imageImports";

function SingleCardViewTest() {
  const whoFlipped = imgName => {
    console.log(imgName);
  };

  const allCardsJsx = () => {
    return allImagesArr.map((im, idx) => (
      <SingleCardView
        key={idx}
        image={im}
        notifyParent={whoFlipped}
      />
    ));
  };

  return (
    <>
      <div className="all-cards-container">{allCardsJsx()}</div>
    </>
  );
}

export default SingleCardViewTest;
