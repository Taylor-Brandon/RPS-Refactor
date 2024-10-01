import React from 'react';
import { MotionConfig, motion } from 'framer-motion';


export default function Button(props) {
    return(
        <div className='game'>
        <MotionConfig
        transition={{
            duration: 0.125,
            ease: "easeIn",
        }}>
            <motion.button
            whileHover={{ scale: 1.05, rotate: "-3.5deg" }}
            whileTap={{ scale: 1.05 }}
            className="button is-medium is-link is-light ml-3 mr-3"
            onClick={() => props.playGame('ROCK')}>
                Rock 🪨
            </motion.button>

            <motion.button
            whileHover={{ scale: 1.05, rotate: "-3.5deg" }}
            whileTap={{ scale: 1.05 }}
            className="button is-medium is-link is-light mr-3"
            onClick={() => props.playGame('PAPER')}>
                Paper 📃
            </motion.button>

            <motion.button
            whileHover={{ scale: 1.05, rotate: "-3.5deg" }}
            whileTap={{ scale: 1.05 }}
            className="button is-medium is-link is-light mr-3"
            onClick={() => props.playGame('SCISSORS')}>
                Scissors ✂️
            </motion.button>
        </MotionConfig>
        </div>
    );
}