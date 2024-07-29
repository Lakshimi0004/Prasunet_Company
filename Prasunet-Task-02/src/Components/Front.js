import React from 'react';

const Front = ({ navigateTo }) => {
  const handlePlayClick = () => {
    navigateTo('main');
  };

  return (
    <div className='h-screen w-screen' style={{
      background: 'linear-gradient(to right, #D66D75, #E29587)',
      backgroundSize: '100%',
      backgroundPosition: 'center'
    }}>
      <div className='flex h-screen justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl mb-4 text-black italic'>TicTacToe</h1><br/>
          <button
            onClick={handlePlayClick}
            className='bg-[#DE254A] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Front;
