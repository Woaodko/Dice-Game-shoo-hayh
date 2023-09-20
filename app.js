// toglogchiin eeljiig hadgalah huwisagdch negdvgeer toglogchig  0  , 2 dugar toglogchiig  1 gej temdeglew 
var activePlayer = 0;

// toglogchidiin  tsugluulsan  onoog hadgalah  huwisagch
var scores = [0, 0]

// toglogchiin eeljindee  tsugluulj baigaa onoog harah huwisagch
var roundScore = 0;

//shoonii ali talaaraa buusniig  hadgalah huwisagch hergttei 1-6 gsn utgiig ene huwisagchid sanamsarguigeer  uusgej ugnu 
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice")
diceDom.style.display = 'none';

//shoog shideh eventListerner 
document.querySelector(".btn-roll").addEventListener("click", function () {
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

        switchToNextPlayer();
    }

});
// hold towchnii eventListenner
document.querySelector('.btn-hold').addEventListener('click', function () {
    //ug toglochiin tsugluulsan onoog global onoonder ni nemj ugnu 
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //ug toglogch hojson esehiig shalgah (onooni 100gas ih eseh shalgah)

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 20) {
        //yalgch gsn text iig nerniihen orond garga 
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player" + activePlayer + "-panel").classList.remove("active");
    }
    else {
        // toglogchin eeljig solino 
        switchToNextPlayer();
    }
    //delgetsendeer onoog oorchilno 
    // document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //toglochhiin eeljiig solino 
}
)
//энэ функц нь тоглох ээлжийг дараачийн тоглогчруу шилжүүлдэг
function switchToNextPlayer() {
    // eeljiin onog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //toglogchiin eeljig nugu toglochruu shiljvvlne
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //shoog tvr alga bolgoh
    diceDom.style.display = "none";
    //toglochhiin eeljiig solino 
}
// shine togloom ehluuleh eventlistener
