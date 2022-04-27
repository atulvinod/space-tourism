import { FC } from "react";
export type PageTitleProps = {
  pagetitle: string;
  pagenumber?: string;
};

export const PageTitle: FC<PageTitleProps> = (props) => {
  return (
    <h5 className="text-color__white text-font__400" {...props}>
      <span className="text-color__blue-grey text-font__700">
        {props.pagenumber ?? "00"}{" "}
      </span>
      {props.pagetitle}
    </h5>
  );
};
