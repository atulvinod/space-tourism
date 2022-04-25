import { FC, useState } from "react";
export type ImageCarouselLargeProps = {
  imagesLandscape: string[];
  imagesPortrait: string[];
  onImageChangeCallback: (index: number) => void;
};

export const ImageCarouselLarge: FC<ImageCarouselLargeProps> = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const setImageIndex = (index: number) => {
    setCurrentImageIndex(index);
    props.onImageChangeCallback(index);
  };

  return (
    <div className="image-carousel-large-container">
      <div className="image-carousel">
        {/* <img
          className="image-carousel-slide-landscape"
          src={props.imagesLandscape.find(
            (element, index, array) => index == currentImageIndex
          )}
        /> */}
        <img
          className="image-carousel-slide-potrait"
          src={props.imagesPortrait.find(
            (element, index, array) => index == currentImageIndex
          )}
        />
      </div>
      <div className="image-carousel-slides-indicator">
        {props.imagesLandscape.map((element, index, array) => {
          return (
            <div
              key={index}
              onClick={() => setImageIndex(index)}
              className={`image-carousel-indicator ${
                "image-carousel-indicator-" +
                (index == currentImageIndex ? "active" : "inactive")
              }`}
            >
                <h4>{index+1}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
