import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import GlobalStyle from "./GloablStyle";
import Login from "@/pages/login/Login";
import Redirection from "@/components/login/Redirection";
import SignUp01 from "@/pages/SignUp01";
import SignUp02 from "@/pages/SignUp02";
import SignUp03 from "@/pages/SignUp03";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="kakaologin" element={<Redirection />} />
            <Route path="signup01" element={<SignUp01 />} />
            <Route path="signup02" element={<SignUp02 />} />
            <Route path="signup03" element={<SignUp03 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
