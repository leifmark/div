
	
	function jepp() {
			//for å starte ballet
			skrivTekst();
}
	
	
	
	function sendTekst() {
		//når brukeren slipper en knapp på tastaturet mens bruker skriver inn i tekstboksen, så påkalles denne funksjonen, som så fortløpende oppdaterer adressefeltet og skriver ut på siden
		var tekst =  document.getElementById('sendTekst').value;
		var urlhash = encodeURI(tekst);
		window.location.hash = urlhash;
		skrivTekst(tekst);

	}
	
	function skrivTekst(v){
		var innhold = document.getElementById('funksjon');
		var tekst = decodeURI(window.location.hash);

	if (v){
		//sjekker om det er noe tekst på gang
		//innhold.innerHTML = tekst;
		drawSomething(tekst);
	} else {
			//sjekker om det er noe bak # i url. Om det er det, så presettes det. Hvis ikke, så skjer egentlig ingenting
		if(tekst){
			//innhold.innerHTML = tekst;
			drawSomething(tekst);
		} else {
			//innhold.innerHTML = "Ingenting";
			drawSomething("");
			}
	}
}
	
function drawSomething(t){
	//defenisjoner
	var h=573;
	var b=800;
	t=t.substring(1); //fjerner #-tag
	var size=50; //standard fotnstørrelse
	
	//her starter moroa
	var cvs=document.getElementById("cvs");
	var ctx=cvs.getContext("2d");
	var img = new Image;

	cvs.height=h;
	cvs.width=b;	
	
	//bakgrunnsbilde
	img.src="ark.jpg";	
 	ctx.drawImage(img, 0, 0, b, h);

	//tekst-fyll
	ctx.font = "Bolder " + size + "px Arial";
	ctx.fillText(t,160,250);	
}

