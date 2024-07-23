import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GloablStyle";
import Layout from "@/layouts/Layout";
import Login from "@/pages/login/Login";
import Redirection from "@/components/login/Redirection";
import EventList from "@/pages/event/EventList";
import SignUp from "@/pages/signup/SignUp";
import Error from "@/pages/error/Error";
import NewPost from "@/pages/post/NewPost";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="kakaologin" element={<Redirection />} />
            <Route path="event" element={<EventList />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="post/">
              <Route path="new" element={<NewPost/>} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
