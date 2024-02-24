const data = fetch('https://api.mfapi.in/mf/100035');

data
	.then(resp => {
		return resp.json();
	})
	.then(value2 => {
		console.log(value2);
	});

const fund = document.getElementsByClassName('cara9');
console.log(fund);

const buttonValues = [fund, 'Value for Vanguard', 'Value for Tata Mutual Fund'];

const buttons = document.querySelectorAll('.get_started');

buttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		const value = buttonValues[index];

		alert(value);
	});
});
