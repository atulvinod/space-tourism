import { FC, useState } from "react";
export type ImageCarouselProps = {
  images: string[];
  onImageChangeCallback: (index: number) => void;
};

export const ImageCarousel: FC<ImageCarouselProps> = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const setImageIndex = (index: number) => {
    setCurrentImageIndex(index);
    props.onImageChangeCallback(index);
  };

  return (
    <div className="image-carousel-container">
      <div className="image-carousel">
        <img
          className="image-carousel-slide"
          src={props.images.find(
            (element, index, array) => index == currentImageIndex
          )}
        />
      </div>
      <div className="image-carousel-divider" />
      <div className="image-carousel-slides-indicator">
        {props.images.map((element, index, array) => {
          return (
            <div
              key={index}
              onClick={() => setImageIndex(index)}
              className={`image-carousel-indicator ${
                "image-carousel-indicator-" +
                (index == currentImageIndex ? "active" : "inactive")
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
