import React, { useState } from 'react';
import Front from './Components/Front';
import Main from './Components/Main';
const App = () => {
  const [currentPage, setCurrentPage] = useState('front');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'front' && <Front navigateTo={navigateTo} />}
      {currentPage === 'main' && <Main navigateTo={navigateTo} />}
    </div>
  );
};

export default App;
