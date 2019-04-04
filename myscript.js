

/*variabel tijd nu
var now=new Date();
Variabel aanmaken voor de dagen.
var dagen =["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

Variabel aanmaken voor de uren.
var uren=


Placing text in the p
function newText(){
var getText=document.getElementById("text");
var putText=document.createElement("p");
p.textContent= "Open";
getText.appendChild (p);
}

Get local day and hours when page loaded
var today= new Date();
 document.addEventListener("load", today);

Look if the day and hour/minutes is equal to the given timeframe in the table

function dateCheck(){
if ((dagen !== "Zondag")&& (uren <= 9) && (uren >= "17:30")) {
    (newText); 
}
}
*/



/*If yes: OPEN*/
/*If no: CLOSED*/
/*If sunday: always CLOSED*/



function dateCheck(){
if (hours >= 9 && hours < 17 && day !== 0){
   

document.getElementById("text").innerText="open";
}

else if (hours == 17 && min <= 30){

    document.getElementById("text").innerText="open";
}

else {
    document.getElementById("text").innerText="closed";

}
}

var d = new Date();
var dls = d.toLocaleString();
var hours= d.getHours();
var min=d.getMinutes();
var day = d.getDay();
console.log(dls);
console.log (d.toLocaleString());
console.log (d.getDay());
console.log(d.getHours());
console.log (d.getMinutes());

dateCheck();