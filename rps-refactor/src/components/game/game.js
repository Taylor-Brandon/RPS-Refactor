import React, { useState } from 'react';

export default function Game() {

    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [ties, setTies] = useState(0);

    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');

    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    const playGame = (userSelection) => {
        setUserChoice(userSelection);

        userChoice.toUpperCase();

        const response = Math.floor(Math.random() * choices.length);
        setComputerChoice(choices[response].toUpperCase());

        if (computerChoice === userChoice) {
            setTies(ties + 1);
            alert('Tie!');
        } else if (userChoice === 'ROCK' && computerChoice === 'SCISSORS') {
            setWins(wins + 1);
            alert("You Win!");
        } else if (userChoice === 'PAPER' && computerChoice === 'ROCK') {
            setWins(wins + 1);
            alert('You Win!');
        } else if (userChoice === 'SCISSORS' && computerChoice === 'PAPER') {
            setWins(wins + 1);
            alert('You Win!');
         } else {
            setLosses(losses + 1);
            alert('You Lose!');
    }
    }

    return (
        <div className='card has-background-white-ter'>
                <div className='card-content'>
                    <div className='content'>
                    <div className='card-header'>
                            <h4 id='card-title' className=' card-header-title has-text-grey'>Rock, Paper, or Scissors?</h4>
                            </div>
                        <div className='game'>
            <button className="button is-medium is-link is-light mr-2" onClick={() => playGame('ROCK')}>Rock 🪨</button>
            <button className="button is-medium is-link is-light mr-2" onClick={() => playGame('PAPER')}>Paper 📃</button>
            <button className="button is-medium is-link is-light" onClick={() => playGame('SCISSORS')}>Scissors ✂️</button>
            </div>
            <div className='display'>
            <p className='has-text-grey'>Wins: {wins}</p>
            <p className='has-text-grey'>Ties: {ties}</p>
            <p className='has-text-grey'>Losses: {losses}</p>
            </div>
            </div>
            </div>
        </div>
    );
}