import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import GlobalStyle from './GloablStyle';

function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
