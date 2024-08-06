import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
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
import Mypage from "./pages/mypage/Mypage";
import CompleteReview from "./pages/review/CompleteReview";
import EventPage from "./pages/event/EventPage";
import ProtectedRoute from "./ProtectedRoute";
import NoticePage from "./pages/post/NoticePage";
import ModifyPost from "./pages/post/ModifyPost";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="kakaologin" element={<Redirection />} />
            <Route path="event">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <EventList />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":eventId"
                element={
                  <ProtectedRoute>
                    <EventPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            
            <Route path="post">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewPost />
                  </ProtectedRoute>
                }
              />
              <Route
                path="newpostcomplete"
                element={
                  <ProtectedRoute>
                    <NewPostComplete />
                  </ProtectedRoute>
                }
              />
              <Route path="notice" element={<NoticePage />} />
              <Route
                path=":postId"
                element={
                  <ProtectedRoute>
                    <PostPage />
                  </ProtectedRoute>
                }
              />
              <Route path="modify">
                <Route path=":postId" element={<ModifyPost />} />
              </Route>
            </Route>
            <Route path="review">
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Review />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":reviewId"
                element={
                  <ProtectedRoute>
                    <ReviewPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewReview />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new/uploaded"
                element={
                  <ProtectedRoute>
                    <CompleteReview />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="mypage"
              element={
                <ProtectedRoute>
                  <Mypage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
