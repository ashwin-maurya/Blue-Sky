import { MainNav, Footer, Scroll } from "./Component/common";
import BlogLayout from "./Layouts/BlogLayout";
import LandingLayout from "./Layouts/LandingLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleBlogLayout from "./Layouts/SingleBlogLayout";
import BlogState from "./Helper/Context/BlogState";
import WriteBlogLayout from "./Layouts/WriteBlogLayout";
import FilterByAuthor from "./Pages/FilterByPages/FilterByAuthor";
import ProfilePage from "./Pages/ProfilePage";
import AuthState from "./Helper/Context/AuthState";
import CheckLogin from "./Helper/CheckLogin";
import HelperState from "./Helper/Context/HelperState";
import CommentLikeState from "./Helper/Context/CommentLikeState";
import UpdateBlogLayout from "./Layouts/UpdateBlogLayout";
import SettingsLayout from "./Layouts/SettingsLayout";
import FilterState from "./Helper/Context/FilterState";
import BookmarkLayout from "./Layouts/BookmarkLayout";
import PreviewLayout from "./Layouts/PreviewLayout";

const App = () => {
  return (
    <BlogState>
      <FilterState>
        <CommentLikeState>
          <HelperState>
            {/* <ReplyState> */}
            <AuthState>
              <Router>
                <Scroll />
                <CheckLogin />
                <MainNav />

                <Routes>
                  <Route path="/" element={<LandingLayout />} />
                  <Route path="/home" element={<LandingLayout />} />
                  <Route path="/blog" element={<BlogLayout />} />
                  <Route path="/settings/*" element={<SettingsLayout />} />

                  <Route path="/blogs/:id" element={<SingleBlogLayout />} />
                  <Route
                    path="/write"
                    element={<WriteBlogLayout></WriteBlogLayout>}
                  />
                  <Route
                    path="/profile/:profile"
                    element={<ProfilePage></ProfilePage>}
                  />
                  <Route
                    path="/author/:handle"
                    element={<FilterByAuthor></FilterByAuthor>}
                  >
                    {" "}
                  </Route>
                  <Route
                    path="/updateblog"
                    element={<UpdateBlogLayout></UpdateBlogLayout>}
                  ></Route>
                  <Route
                    path="/preview"
                    element={<PreviewLayout></PreviewLayout>}
                  ></Route>
                  <Route
                    path="/bookmarks"
                    element={<BookmarkLayout></BookmarkLayout>}
                  ></Route>

                  {/* <Route path="/*" element={<NotFound />} /> */}
                </Routes>
                <Footer />
              </Router>
            </AuthState>
            {/* </ReplyState> */}
          </HelperState>
        </CommentLikeState>
      </FilterState>
    </BlogState>
  );
};

export default App;
