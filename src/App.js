import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Travels from "./pages/Travels/Travels.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Page from "./pages/Projects/[project]/page.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Post from "./pages/Blog/[post]/post.jsx";

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
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Travels" element={<Travels />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/dev/:project" element={<Page />} />
          <Route path="/blog/:postTitle" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
