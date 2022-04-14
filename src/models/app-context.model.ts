export class AppContextModel {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (state: boolean) => void;
  constructor(args: any) {
    this.isNavBarOpen = args.isNavBarOpen ?? false;
    this.setIsNavBarOpen =
      args.setIsNavBarOpen ?? ((isNavBarOpen: boolean) => {});
  }
}
