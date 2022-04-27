import { FC, useState } from "react";
export type ImageCarouselLargeProps = {
  imagesLandscape: string[];
  imagesPortrait: string[];
  currentImage:number
};

export const ImageCarouselLarge: FC<ImageCarouselLargeProps> = (props) => {

  return (
    <div className="image-carousel-large-container">
      <div className="image-carousel">
        <img
          className="image-carousel-slide-landscape"
          src={props.imagesLandscape.find(
            (element, index, array) => index == props.currentImage
          )}
        />
        <img
          className="image-carousel-slide-potrait"
          src={props.imagesPortrait.find(
            (element, index, array) => index == props.currentImage
          )}
        />
      </div>
    </div>
  );
};
