// JS Types: 
var firstName = 'Nyk';
var isAdmin = false;
var age = 28;
var duties = ['write code', 'fix bugs'];
var car = null;
var bicycle = undefined;
var work = function () {
    console.log('Working...');
};
var salary = 50n;
var logo = Symbol('emerald');
var all = [firstName, isAdmin, age, car, bicycle, work, salary, logo];
for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
    var item = all_1[_i];
    console.log(String(item) + 'is ' + typeof item);
}
