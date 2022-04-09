import { createContext, useState } from "react";

export class AppContextModel {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (state: boolean) => void;
  constructor(args: any) {
    this.isNavBarOpen = args.isNavBarOpen ?? false;
    this.setIsNavBarOpen =
      args.setIsNavBarOpen ?? ((isNavBarOpen: boolean) => {});
  }
}

export const AppContext = createContext(new AppContextModel({}));

export const AppContextProvider = (props: any) => {
  const { children } = props;
  const [isNavBarOpen, setNavbarOpen] = useState(false);
  const setIsNavBarOpen = (isNavBarOpen: boolean) => {
    setNavbarOpen(isNavBarOpen);
  };

  const values = new AppContextModel({
    isNavBarOpen,
    setIsNavBarOpen,
  });
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
