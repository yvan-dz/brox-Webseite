let clickCount =0;
function incrementClickcount(){
	clickCount++;
	document.getElementById("clickCount").innerText= clickCount + 'Personen haben geklickt. ';

}
function onLinkClick(){
	incrementClickcount();
}