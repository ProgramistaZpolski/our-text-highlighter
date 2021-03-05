"use strict";

document.addEventListener('mouseup', event => {
	if (window.getSelection().toString().length) {
		let exactText = window.getSelection().toString();
		if (exactText.toLowerCase().includes("our")) {
			event.target.parentElement.style.backgroundSize = `contain`;
			event.target.parentElement.style.backgroundImage = `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgnosticwarrior.com%2Fwp-content%2Fuploads%2F2013%2F06%2FSoviet_Union-Flag.png&f=1&nofb=1")`;
		};
	};
});
