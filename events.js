// Old way

<button onclick="alert('hai');"></button>

// Old way from JS
document.getElementById('someId').onclick = function() {alert('hai');};

// Standard
document.getElementById('someId').addEventListener('click', function(e) {alert('hai');}, false);

// Old Internet Explorer
document.getElementById('someId').attachEvent('onclick', function() {alert('hai');});
