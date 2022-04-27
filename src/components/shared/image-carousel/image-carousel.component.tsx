import { FC, useState } from "react";
export type ImageCarouselProps = {
  images: string[];
  currentImage: number;
};

export const ImageCarousel: FC<ImageCarouselProps> = (props) => {
  return (
    <div className="image-carousel-container">
      <div className="image-carousel">
        <img
          className="image-carousel-slide"
          src={props.images.find(
            (element, index, array) => index == props.currentImage
          )}
        />
      </div>
      <div className="image-carousel-divider" />
    </div>
  );
};
