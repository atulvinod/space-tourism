import "./App.scss";
import { Route, Routes } from "react-router-dom";
import {
  CrewScreen,
  DestinationScreen,
  HomeScreen,
  TechnologyScreen,
} from "./screens";
import { AppRoot } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppRoot />}>
        <Route index element={<HomeScreen />} />
        <Route path="/destination/:pagename" element={<DestinationScreen />} />
        <Route path="/destination" element={<DestinationScreen />} />
        <Route path="/crew" element={<CrewScreen />} />
        <Route path="/technology" element={<TechnologyScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
