import React from 'react';
import Board from './Components/Board';
import Square from './Components/Square';
import './Styles/root.scss';
export default () => (
  <div className="app">
    <h1>Tic Tac Toe!</h1>
    <Board />
  </div>
);
