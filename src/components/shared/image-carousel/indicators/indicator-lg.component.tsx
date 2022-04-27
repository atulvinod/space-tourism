import { FC } from "react";
import { CarouselIndicatorProps } from "./indicator-sm.component";
export const CarouselIndicatorLg: FC<CarouselIndicatorProps> = (props) => {
  const indicators = [];

  for (let i = 0; i < props.totalSlides; i++) {
    indicators.push(
      <div
        key={i}
        onClick={() => props.imageChangeCallback(i)}
        className={`indicator ${
          "indicator-" + (i == props.currentSlide ? "active" : "inactive")
        }`}
      >
        <h4>{i + 1}</h4>
      </div>
    );
  }

  return (
    <div className="carousel-indicator-lg">
      <div className="indicators-row">{indicators.map((e) => e)}</div>
    </div>
  );
};
