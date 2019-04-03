/*Variabel aanmaken voor de dagen.*/
var dagen =["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

/*Variabel aanmaken voor de uren.*/
var uren=[]


/*Placing text in the p*/
var getText = document.getElementById("text").write="OPEN";
/*document.getElementById("text").innerHTML="CLOSED";*/

/*Get local day and hours when page loaded*/
var today= new Date(day, hours, minutes);
 document.addEventListener("load", load);

/*Look if the day and hour/minutes is equal to the given timeframe in the table*/

function dateCheck(){
if ((dagen !== "Zondag")&& (uren < '9') && (uren > '17:30')) {
var getText;

}}
/*else 
document.write("CLOSED");


}*/



/*If yes: OPEN*/
/*If no: CLOSED*/
/*If sunday: always CLOSED*/