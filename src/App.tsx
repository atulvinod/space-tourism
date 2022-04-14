import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { DestinationScreen, HomeScreen } from "./screens";
import { AppRoot } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppRoot />}>
        <Route index element={<HomeScreen />} />
        <Route path="/destination/:pagename" element={<DestinationScreen />} />
        <Route path="/destination" element={<DestinationScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
