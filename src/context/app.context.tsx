import { createContext, useState } from "react";
import { AppContextModel } from "../models";


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
