console.log('popup.js running...');

(function($){
window.addEventListener("DOMContentLoaded", async () => {
	let app = new fontApp();
	let tab = undefined;
	const saveBtn = document.getElementById('save-btn');

	chrome.tabs.query({
		active:true,
		currentWindow:true
	}).then(tabs => {
		tab = tabs[0];
		

		if(tab.url === undefined || tab.url.indexOf('chrome') == 0 || tab.url.indexOf('file') == 0) {
			app.alert("<p><strong>Permission Problem</strong><br>Your extension will not work properly on <br> <strong>'chrome://'</strong> or <strong>'file://'</strong></p>")
		} else {
			const hostname = tab.url.split('://')[1].split('/')[0];
			app.init()
			app.setHostName(hostname.replace('www.',''));
		}
	}).catch(err => {
		app.alert("Error on Tab Query", JSON.stringify(err));
	});
});


function fontApp() {
	// this.init();
	// fetch(apiUrl).then(d=>d.json()).then(d=>console.log(d)).catch(e=>console.warn(e));
}

var p = fontApp.prototype || {}; 

p.init = function() {
	this.loadFonts().then(()=>{
		this.updateFontList();
		this.addListener();
	}).catch(e=>{
		console.log('json error:', e);
	});
};

p.loadFonts = async function() {
	const fonts = await fetch('fonts.json');
	this.data = await fonts.json();
	this.cssUrl = this.data.cssUrl;
};

p.updateFontList = function() {
	this.addFontOption(this.data.fonts);
}
p.addFontOption = function(fonts) {
	const $fontSelect = $('select[name=sfont]');
	
	$fontSelect.empty();
	$fontSelect.append('<option>Please Choose Font</option>');
	fonts.forEach((itm,ind)=>{
		const name = itm.family;
		this.addGoogleFont(itm);
		const $opt = $('<option value="'+name+'" data-id="'+ind+'" class="'+this.getClassName(name)+'">'+name+'</option>');
		this.addFontStyle(itm.family);
		$fontSelect.append($opt);
	});
	$fontSelect.selectpicker({
		// style:'btn-secondary',
		// size:4
	});
}
p.addStyleOption = function(styles) {
	const $styleSelect = $('select[name=sstyle]');
	$styleSelect.empty();
	$styleSelect.append('<option>Please Choose Style</option>');
	styles.forEach((itm,ind) => {
		$styleSelect.append('<option value="'+itm+'" data-index="'+ind+'" >'+itm+'</option>')
	});
	$styleSelect.selectpicker();
}
p.addGoogleFont = function(item) {
	const link = document.createElement('link');
	link.href = this.cssUrl+item.family;
	// if(item.variants && item.variants.length>0)
	// 	link.href = link.href+':'+item.variants.join(',');
	link.crossOrigin = true;
	link.rel = 'stylesheet';
	link.type='text/css'
	link.className = this.getClassName(item.family);;
	document.head.appendChild(link);
};
p.addFontStyle = function(name) {
	const style = document.createElement('style');
	style.innerHTML='.'+this.getClassName(name)+'{font-family:"'+name+'" !important;}';
	document.head.appendChild(style)
};
p.getClassName = function(name) {
	return 'sos-font-'+name.replace(/\s+/g, '-').toLowerCase();
}

p.addListener = function(){
	$('select[name=sfont]').on('change', this.onFontChange.bind(this));
};

p.onFontChange = function(e) {
	const index = $(e.target).find(':selected').data('id');
	const styles = this.data.fonts[index].variants;

	console.log(index);

	this.addStyleOption(styles);

	// Send a message to the active tab to change the font
	// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	//   chrome.tabs.sendMessage(tabs[0].id, obj);
	// });
};
p.alert = function(msg) {
	const $sosAlert = $('#sos-alert');
	const $body = $sosAlert.find('.modal-body');
	$body.empty();
	$body.append('<p>'+msg+'</p>');
	$sosAlert.modal();
}
p.setHostName = function(value) {
	$('.header .text-danger').html(value);
}
p.setStorage = async function(obj) {
	return await chrome.storage.sync.set(obj);
}
p.getStorage = async function(key) {
	return await chrome.storage.sync.get(key);
}

})(jQuery);

