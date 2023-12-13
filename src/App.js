import Inspect from "inspx";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import LockedIn from "./pages/Projects/LockedIn/LockedIn.jsx";
import Memoria from "./pages/Projects/Memoria/Memoria.jsx";
import SuperDMs from "./pages/Projects/SuperDMs/SuperDMs.jsx";

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
      <Inspect>
        <div className="viewer">
          <Navigation />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects/LockedIn" element={<LockedIn />} />
            <Route path="/Projects/Memoria" element={<Memoria />} />
            <Route path="/Projects/SuperDMs" element={<SuperDMs />} />
          </Routes>
        </div>
      </Inspect>
    </div>
  );
}

export default App;
