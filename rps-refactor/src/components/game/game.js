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
        <div>
            <button onClick={() => playGame('ROCK')}>Rock</button>
            <button onClick={() => playGame('PAPER')}>Paper</button>
            <button onClick={() => playGame('SCISSORS')}>Scissors</button>

            <h2>Wins: {wins}</h2>
            <h2>Ties: {ties}</h2>
            <h2>Losses: {losses}</h2>
        </div>
    );
}