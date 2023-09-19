import { MainNav } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import SingleBlogLayout from "./Layouts/SingleBlogLayout";
// import Editor from "./Helper/Editor";
import EditBlog from "./Section/EditSection/EditBlog";
import blogContext from "./Helper/Context/blogContext";
import BlogState from "./Helper/Context/BlogState";

const App = () => {
  const { handle } = useParams();
  console.log(handle);
  return (
    <BlogState>
      <section className="max-container dark:bg-darkBgMain">
        <Router>
          <MainNav />

          <Routes>
            <Route path="/" element={<LandingLayout />} />
            <Route path="/home" element={<LandingLayout />} />
            <Route path="/blog" element={<BlogLayout />} />
            <Route path="/:handle" element={<SingleBlogLayout />} />
            <Route path="/Edit" element={<EditBlog></EditBlog>}>
              {" "}
            </Route>
            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </section>
    </BlogState>
  );
};

export default App;
