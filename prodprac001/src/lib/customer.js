const ROOTDIV = 's-customers';

export default class Customer {

	constructor(name, address, phone) {
		this.name = name;
		this.address = address;
		this.phone = phone;

		this.addElement();
	}

	addElement() {
		const para = this.element = document.createElement('p');
		para.classList.add('customer');
		para.style.border = '1px solid green';
		para.style.padding = '1rem';
		para.style.margin = '0';

		para.innerHTML = 'Hello '+this.name+'<br>'+this.address+'<br>'+this.phone;
		document.getElementById(ROOTDIV).appendChild(para);
	}

	removeElement() {
		document.body.removeChild(this.element);
	}

}

export function createRootDiv() {
	let custDiv = document.getElementById(ROOTDIV);

	if(custDiv) document.body.removeChild(custDiv);

	custDiv = document.createElement('div');
	custDiv.id = ROOTDIV;
	custDiv.style.display = 'grid';
	custDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';
	custDiv.style.gap = '1em';
	custDiv.style.padding = '1em';
	custDiv.style.flexGrow = 'auto';
	custDiv.style.border = '1px solid #ccc';
	document.body.appendChild(custDiv);
}

if(module && module.hot) module.hot.accept();