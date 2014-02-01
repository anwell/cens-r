element=document.createElement('span');
element.setAttribute("style", "background-color:black;color:black;");
chrome.storage.sync.get({
	words: ""
}, function(items) {
	var words = items.words.split(",");
	for (var word in words) {
		console.log(items.words);
		findAndReplaceDOMText(document.body, {find: words[word], wrap: element});
	}
});