console.log('popup.js running...');

const googleFontUrl = 'https://fonts.googleapis.com/css2?family=';
const googleFonts = [
  'Roboto', 'Lato', 'Poppins', 'Barlow',
  'Oxygen', 'Arimo', 'Bebas Neue', 'Lobster',
  'Patua One'
];

const $myForm = document.forms.myform;
const $fontSelector = $myForm.sfont;

console.log($fontSelector);

$fontSelector.addEventListener('change', e => {
	console.log('changeevent: '+e);
	// e.stopPropagation();
	const fontValue = $myForm.sfont.value;

	// Send a message to the active tab to change the font
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, { font: fontValue });
	});
})
