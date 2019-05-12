import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Drizzle } from "drizzle";
import Real from "./contracts/Real.json";

// let drizzle know what contracts to accees from the blockchain
const options = {
    contracts: [Real],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:22000",
        },
    },
};

// setup the drizzle store and drizzle
const drizzle = new Drizzle(options);
ReactDOM.render(<App drizzle={drizzle}/>, document.getElementById('root'));
