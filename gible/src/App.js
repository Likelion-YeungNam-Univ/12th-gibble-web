import React from 'react';
import Navigationbar from './layouts/header/Navbar';
import Footer from './layouts/footer/Footer';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  const mainContentStyle = {
    flex: '1'
  };

  
  return (
    <div style={appStyle}>
      <div className='Header'>
        <div>
          <Navigationbar />
        </div>
      </div>

      <div style={mainContentStyle}>
        {/* 메인콘텐즈 넣는 자리 */}
      </div>

      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );


}

export default App;
