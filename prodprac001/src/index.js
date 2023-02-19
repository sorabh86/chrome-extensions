import Customer from "./lib/customer"

console.log("started");

var sorabh = new Customer('Sorabh', "123 Street", '3938829300');
sorabh.printGreet();

var neeraj = new Customer('Neeraj', "343 Street", '9584736582');
neeraj.printGreet();
