

function load(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		document.getElementById('demo').innerHTML = this.responseText;
	}
	xhttp.open('GET','text.html');
	xhttp.send();
}