import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GloablStyle";
import Layout from "@/layouts/Layout";
import Login from "@/pages/login/Login";
import Redirection from "@/components/login/Redirection";
import EventList from "@/pages/event/EventList";
import SignUp from "@/pages/signup/SignUp";
import Error from "@/pages/error/Error";
import NewPost from "@/pages/post/NewPost";
import Post from "@/pages/post/Post";
import Main from "@/pages/main/Main";
import Review from "@/pages/review/Review";
import NewReview from "@/pages/review/NewReview";
import NewPostComplete from "@/components/post/newPostComplete/NewPostComplete";
import ReviewPage from "./pages/review/ReviewPage";
import PostPage from "./pages/post/PostPage";
import CompleteReview from "./pages/review/CompleteReview";
import EventPage from "./pages/event/EventPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="kakaologin" element={<Redirection />} />
            <Route path="event">
              <Route path="" element={<EventList />} />
              <Route path=":eventId" element={<EventPage />} />
            </Route>

            <Route path="signup" element={<SignUp />} />
            <Route path="post">
              <Route path="" element={<Post />} />
              <Route path="new" element={<NewPost />} />
              <Route path="newpostcomplete" element={<NewPostComplete />} />
              <Route path=":postId" element={<PostPage />} />
            </Route>
            <Route path="/review">
              <Route path="" element={<Review />} />
              <Route path=":reviewId" element={<ReviewPage />} />
              <Route path="new" element={<NewReview />} />
              <Route path="new/uploaded" element={<CompleteReview />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
