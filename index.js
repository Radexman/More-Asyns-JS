const order = (cb) => {
	console.log('Order placed, please call production.');
	cb();
};

const production = () => {
	console.log('Order recieved, starting production.');
};

order(production);
