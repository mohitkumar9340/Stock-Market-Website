const APIKey = 'pk_099022af82f14f3f9ffad66681c5bde9';

const search = document.querySelector('#search');

search.addEventListener('submit', e => {
	e.preventDefault();

	const stock = document.querySelector('.search').value;
	const data = fetch(
		`https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${APIKey}`
	);

	data
		.then(resp => {
			if (!resp.ok) {
				document.getElementById('companyName').value = 'none';
				document.getElementById('change').value = 'none';
				document.getElementById('changePercent').value = 'none';
				document.getElementById('low').value = 'none';
				document.getElementById('high').value = 'none';
				document.getElementById('avg').value = 'none';
				document.getElementById('currency').value = 'none';
				document.getElementById('symbol').value = 'none';
				document.getElementById('previousClose').value = 'none';
				document.getElementById('latestTime').value = 'none';
				document.getElementById('latestVolume').value = 'none';
				document.getElementById('close').value = 'none';
				document.getElementById('open').value = 'none';
				document.getElementById('week52High').value = 'none';
				document.getElementById('week52Low').value = 'none';
				document.getElementById('peRatio').value = 'none';
				document.getElementById('marketCap').value = 'none';
				return;
			}

			return resp.json();
		})
		.then(value2 => {
			console.log(value2);

			document.getElementById('companyName').value = value2.companyName;
			document.getElementById('change').value = value2.change;
			document.getElementById('changePercent').value = value2.changePercent;
			document.getElementById('low').value = value2.low;
			document.getElementById('high').value = value2.high;
			document.getElementById('avg').value = value2.avgTotalVolume;
			document.getElementById('currency').value = value2.currency;
			document.getElementById('symbol').value = value2.symbol;
			document.getElementById('previousClose').value = value2.previousClose;
			document.getElementById('latestTime').value = value2.latestTime;
			document.getElementById('latestVolume').value = value2.latestVolume;
			document.getElementById('close').value = value2.close;
			document.getElementById('open').value = value2.open;
			document.getElementById('week52High').value = value2.week52High;
			document.getElementById('week52Low').value = value2.week52Low;
			document.getElementById('peRatio').value = value2.peRatio;
			document.getElementById('marketCap').value = value2.marketCap;

			fetchPrices(value2.symbol);
		});
});

function fetchPrices(stock) {
	const prices = fetch(
		`https://cloud.iexapis.com/stable/stock/${stock}/chart?token=${APIKey}`
	);

	prices
		.then(value1 => {
			return value1.json();
		})
		.then(values2 => {
			const priceDates = values2.map(item => item.priceDate);
			const closeValues = values2.map(item => item.close);

			// Create the line chart
			new Chart('myChart', {
				type: 'line',
				data: {
					labels: priceDates,
					datasets: [
						{
							label: 'Close',
							data: closeValues,
							borderColor: '#609966',
							backgroundColor: 'rgba(0, 200, 0, 0.2)',
							borderWidth: 1,
							pointRadius: 3,
							pointBackgroundColor: '#03C988',
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						x: {
							type: 'time',
							time: {
								unit: 'day',
								displayFormats: {
									day: 'MMM DD',
								},
							},
							title: {
								display: true,
								text: 'Price Date',
							},
						},
						y: {
							title: {
								display: true,
								text: 'Close',
							},
						},
					},
				},
			});
		});
}
