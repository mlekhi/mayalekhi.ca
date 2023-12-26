import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Projects from "./pages/Projects/Projects.jsx";

import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function App() {
  return (
    <div className="body">
      <Navigation />
        <div className="viewer">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
