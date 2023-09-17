// toglogchiin eeljiig hadgalah huwisagdch negdvgeer toglogchig  0  , 2 dugar toglogchiig  1 gej temdeglew 

var activePlayer = 0;

// toglogchidiin  tsugluulsan  onoog hadgalah  huwisagch

var scores = [0, 0]

// toglogchiin eeljindee  tsugluulj baigaa onoog harah huwisagch

var roundScore = 0;

//shoonii ali talaaraa buusniig  hadgalah huwisagch hergttei 1-6 gsn utgiig ene huwisagchid sanamsarguigeer  uusgej ugnu 
var diceNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// document.querySelector(".dice").style.display = "none";

var diceDom = document.querySelector(".dice")
diceDom.style.display = 'none';

//shoog shideh eventListerner 
document.querySelector(".btn-roll").addEventListener("click", function shooShid() {
    //1-6 dotorh sanamsargui neg too  gargaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig  web der gargaj irne 
    diceDom.style.display = "block";

    // buusan sannamsargui toond  hargalzah shoonii zurgiig  web der  garagh
    diceDom.src = 'dice-' + diceNumber + '.png'

    // buusan too ni 1 ees  yalgatai bol idwehtei  toglogchiin  eeljiin onoog nemgduulne 
    if (diceNumber !== 1) {
        // 1 ees uur  too buulaa . buusan toog toglogchid nemj ugnu 
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {
        // 1 buusan tul toglochiin  eeljiin ene hesegt  solij ugnu 

        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // toglogchiiin eeljiig nuguu toglogchruu shiljuulne 

        // herw idwehtei togloch ni  0 baiwall  idwehtei toglogchiig    1 bolgo .
        // ugui bol idwehtei toglogchig 0 bolgo


        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // }
        // else {
        //     activePlayer = 0;
        // }

        // Улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //shoog tvr alga bolgoh
        diceDom.style.display = "none";
    }
});
