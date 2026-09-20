import { useMediaQuery } from "react-responsive";

import SlidesApp from "./sections/SlidesApp";
import ScrollApp from "./sections/ScrollApp";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <SlidesApp /> : <ScrollApp />;
};

export default App;
