import { FC } from "react";
export type PageTitleProps = {
  pageTitle: string;
  pageNumber?: string;
};

export const PageTitle: FC<PageTitleProps> = (props) => {
  return (
    <h5 className="text-color__white text-font__400">
      <span className="text-color__blue-grey text-font__700">
        {props.pageNumber ?? "00"}{" "}
      </span>
      {props.pageTitle}
    </h5>
  );
};
