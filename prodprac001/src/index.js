import Customer, {createRootDiv} from "./lib/customer"

const customers = [
	{name:'Sorabh', address:"123 Street", phone:'3938829300'},
	{name:'Neeraj', address:"343 Green Land", phone:'9584736582'},
	{name:'Pankaj', address:"River Side 2", phone:'5959584932'},
	{name:'Deepak', address:"123 Street", phone:'9388293000'},
];

const customerList = [];

// add new customer in dom
createRootDiv();
customers.forEach(e=>customerList.push(new Customer(e.name, e.address, e.phone)));

console.log(customerList);

if(module && module.hot) module.hot.accept();