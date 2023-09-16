// toglogchiin eeljiig hadgalah huwisagdch negdvgeer toglogchig  0  , 2 dugar toglogchiig  1 gej temdeglew 

var activePlayer = 0;

// toglogchidiin  tsugluulsan  onoog hadgalah  huwisagch

var scores = [0, 0]

// toglogchiin eeljindee  tsugluulj baigaa onoog harah huwisagch

var roundScore = 0;

//shoonii ali talaaraa buusniig  hadgalah huwisagch hergttei 1-6 gsn utgiig ene huwisagchid sanamsarguigeer  uusgej ugnu 
var dice = Math.floor(Math.random() * 6) + 1;

window.document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;


document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо " + dice); 
