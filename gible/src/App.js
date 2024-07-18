import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import GlobalStyle from './GloablStyle';
import Login from '@/pages/login/Login';

function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
