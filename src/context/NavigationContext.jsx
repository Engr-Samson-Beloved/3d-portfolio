import { createContext, useContext } from "react";

const NavigationContext = createContext({
  goTo: () => {},
  activeId: "hero",
  isSlideMode: false,
});

export const useNavigation = () => useContext(NavigationContext);

export default NavigationContext;
