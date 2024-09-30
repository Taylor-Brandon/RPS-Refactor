import React from 'react';
import Game from './components/game/game';
import './styles/style.css'

export default function App() {
    return(
      <div className='body has-background-link-light'>
        <Game />
      </div>
    );
  }