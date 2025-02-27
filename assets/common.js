document.addEventListener('DOMContentLoaded', function() {
	if(!disableMath) renderMathInElement(document.body, {
		delimiters: [
			{left: '$', right: '$', display: false},
			{left: '\\[', right: '\\]', display: true},
			{left: '\\(', right: '\\)', display: false},
		]
	});
});
