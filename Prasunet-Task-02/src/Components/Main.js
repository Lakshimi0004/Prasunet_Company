import React, { useState } from 'react';

const Main = ({navigateTo}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  
  const handleClick = (index) => {
    if (gameOver || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setCount(count + 1);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
    } else if (count + 1 === 9) {
      setGameOver(true);
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const renderCell = (index) => {
    return (
      <div
        className="w-[90px] h-[90px] border border-black flex items-center justify-center text-3xl italic font-bold"
        style={{
          color: board[index] === 'X' ? '#002D62' : board[index] === 'O' ? 'black' : 'white',
        }}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };
  const handleTopic = () =>{
    navigateTo("front");
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCount(0);
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
  };

  const getStatusMessage = () => {
    if (winner) {
      return ` Winner :  ${winner}`;
    }
    if (gameOver) {
      return count === 9 ? "It's a draw!" : "Game Over!";
    }
    return null;
  };

  return (
    <div className='h-screen w-screen flex flex-col     items-center' style={{
      background: 'linear-gradient(to right, #D66D75, #E29587)',
      backgroundSize: '100%',
      backgroundPosition: 'center'
    }}> 

      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className='h-[80px] w-full bg-black flex justify-center'>
        <h1 className='text-4xl mb-4 text-pink-300  m-auto cursor-pointer' onClick={handleTopic}>TicTacToe</h1>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 m-auto justify-center border border-black '>
          {board.map((_, index) => renderCell(index))}
        </div>
      </div>
      {gameOver && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
          <div className="bg-[#FFC0CB] p-15 rounded-lg shadow-lg p-20 m-auto">
            <h2 className="text-xl mb-4">{getStatusMessage()}</h2>
            <button onClick={handleReset} className="p-2 bg-pink-900 text-white rounded">
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
