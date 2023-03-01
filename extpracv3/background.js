console.log('hello background');

async function getCurrentTab() {
	let tab = await getCurrentTab();

	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['content_script.js']
	});
}