// const Records = [
// 	{
// 		id: '1',
// 		Date: '26.10.22',
// 		Weight: 75,
// 	},
// 	{
// 		id: '2',
// 		Date: '27.10.22',
// 		Weight: 75.4,
// 	},
// ];

// using localStorage means array is taken from here
const Records = JSON.parse(localStorage.getItem('Records'));

export default Records;
