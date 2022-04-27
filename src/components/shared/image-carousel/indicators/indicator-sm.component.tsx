import { FC } from "react";

export type CarouselIndicatorProps = {
  totalSlides: number;
  currentSlide: number;
  imageChangeCallback: (index: number) => void;
};

export const CarouselIndicatorSm: FC<CarouselIndicatorProps> = (props) => {
  const indicators = [];

  for (let i = 0; i < props.totalSlides; i++) {
    indicators.push(
      <div
        key={i}
        onClick={() => props.imageChangeCallback(i)}
        className={`indicator ${
          "indicator-" + (i == props.currentSlide ? "active" : "inactive")
        }`}
      ></div>
    );
  }

  return (
    <div className="carousel-indicator-sm">
      <div className="indicators-row">{indicators.map((e) => e)}</div>
    </div>
  );
};
