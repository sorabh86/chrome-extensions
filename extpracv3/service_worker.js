console.log('service_worker running');

chrome.tabs.onCreated.addListener((tab)=>console.log('created:',tab))
chrome.tabs.onActivated.addListener((tab)=>console.log('activated:',tab))

