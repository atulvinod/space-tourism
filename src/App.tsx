import "./App.scss";
import { Route, Routes } from "react-router-dom";
import {
  CrewPage,
  DestinationPage,
  HomePage,
  TechnologyPage,
} from "./pages";
import { AppRoot } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppRoot />}>
        <Route index element={<HomePage />} />
        <Route path="/destination/:pagename" element={<DestinationPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
