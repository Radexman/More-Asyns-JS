const stocks = {
	fruits: ['strawberry', 'grapes', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

function time(ms) {
	return new Promise((resolve, reject) => {
		if (isShopOpen) {
			setTimeout(resolve, ms);
		} else {
			reject('Shop is closed.');
		}
	});
}

const kitchen = async () => {
	try {
		await time(2000);
		console.log(`${stocks.fruits[0]} was selected`);

		await time(0);
		console.log('Start the production');

		await time(2000);
		console.log('Cut the fruit');

		await time(1000);
		console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

		await time(1000);
		console.log('Start the machine');

		await time(2000);
		console.log(`Ice cream placed on ${stocks.holder[0]}`);

		await time(3000);
		console.log(`${stocks.toppings[0]} was selected`);

		await time(2000);
		console.log('Serve ice cream');
	} catch (error) {
		throw new Error(error);
	} finally {
		console.log('Day ended, shop is closed.');
	}
};

kitchen().catch((error) => console.log(error));
