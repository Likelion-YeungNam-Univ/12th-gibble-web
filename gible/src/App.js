import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import GlobalStyle from "./GloablStyle";
import Login from "@/pages/login/Login";
import Redirection from "@/components/login/Redirection";
import SignUp01 from "@/pages/signup/SignUp01";
import SignUp02 from "@/pages/signup/SignUp02";
import SignUp03 from "@/pages/signup/SignUp03";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="kakaologin" element={<Redirection />} />
            <Route path="signup/">
              <Route path="1" element={<SignUp01 />} />
              <Route path="2" element={<SignUp02 />} />
              <Route path="3" element={<SignUp03 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
