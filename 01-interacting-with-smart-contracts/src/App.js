import React, { useState } from 'react';

import { getSafeBurn } from './Web3Client';

function App() {
	 const [burnt, setBurn] = useState(false);
	//const [balance, setBalance] = useState(0);

	// const mint = () => {
	// 	mintToken()
	// 		.then((tx) => {
	// 			console.log(tx);
	// 			setMinted(true);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

  const burn = () => {
		getSafeBurn()
			.then((id) => {
				console.log(id);
				setBurn(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const fetchBurn = () => {
	// 	getSafeBurn()
	// 		.then((balance) => {
	// 			setBalance(balance);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	return (
		<div className="App">
			{ {!burnt ? (
				<button onclick="burn()"> Burn token </button>
			) : (
				<p>Token Burnt successfully!</p>
			)} }
		// 	<p>Your balance is {balance}</p>
		// 	<button onClick={() => fetchBalance()}>Refresh balance</button>
		// </div>
	);
}

export default App;
