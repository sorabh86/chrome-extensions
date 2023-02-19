export default class Customer {

	constructor(name, address, phone) {
		this.name = name;
		this.address = address;
		this.phone = phone;
	}

	printGreet() {
		const para = document.createElement('p');
		para.innerHTML = 'Hello '+this.name+'<br>'+this.address+'<br>'+this.phone;
		document.body.appendChild(para);
	}

}