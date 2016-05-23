// function getTempCallback(location, callback){
// 	callback(undefined, 78);
// 	callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(error, temp){
// 	if (error) {
// 		console.log('error', error);
// 	} else {
// 		console.log('success', temp);
// 	}
// });
//
//
// function getTempPromise(location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (error) {
// 	console.log('promise error', error);
// });

// challenge area
function addPromise(a, b){
	return new Promise(function (resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number'){
			var sum = a+b;
			resolve(sum);
		} else {
		reject('Check to see if they are both numbers');
		}
	});
}

addPromise(4, 5).then(function (sum) {
	console.log('success', sum);
}, function (error) {
	console.log('error', error);
});


addPromise(4, 'u').then(function (sum) {
	console.log('This should not show up', sum);
}, function (error) {
	console.log('This should appear', error);
});
