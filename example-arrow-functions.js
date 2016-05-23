// var names = ['Andrew', 'Becca', 'Lobo'];
//
// names.forEach(function (name) {
// 	console.log('forEach', name);
// });
//
// names.forEach((name) => {
// 	console.log('arrowfunc', name);
// 	console.log('something else');
// 	var x ='something';
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Becca'));

// var person = {
// 	name: 'Becca',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name);
// 		})
// 	}
// };
//
// person.greet();

// challenge area

function add (a, b) {
	return a + b;
}

// addStatement

var addStatement = (a, b) => {
	return a + b;
}
console.log(addStatement(4,7));

// addExpression

var addExpression = (a, b) => a + b;

console.log(addExpression(9, 10));

console.log(add(1,3));
console.log(add(3,3));
console.log(add(4,3));
