import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import GlobalStyle from "./GloablStyle";
import Login from "@/pages/login/Login";
import Redirection from "@/components/login/Redirection";
import EventList from "./pages/event/EventList";
import SignUp from "@/pages/signup/SignUp";

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
            <Route path="signup/" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
