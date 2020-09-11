var arrOptions = ["Rock", "Paper", "Scissor", "Spock", "Lizard"];
var oppOptions = ["oppRock", "oppPaper", "oppScissor", "oppSpock", "oppLizard"];
var yourScore = 0;
var oppoScore = 0;
function getId(id) { return document.getElementById(id); }
function listenPar(id, event, func) { return getId(id).addEventListener(event, func); }
function inner(id, innerHTML) { return (getId(id).innerHTML = innerHTML); }
function youWinMessage() { inner("choice", "You Win !"); }
function youDraw() { inner("choice", "It's a draw"); }
function youLoseMesssage() { inner("choice", "You Lose..."); }
function youScore() { yourScore++; inner("youScore", "Score: " + yourScore); }
function oppScore() { oppoScore++; inner("oppScore", "Score: " + oppoScore); }
var youWin;
var youLose;
arrOptions.forEach(function (option, i) {
    listenPar(arrOptions[i], "click", function () {
        for (var b = 0; b < oppOptions.length; b++) {
            getId(oppOptions[b]).style.borderColor = "white";
            getId(arrOptions[b]).style.borderColor = "white";
        }
        getId(arrOptions[i]).style.borderColor = "green";
        var playerValue = i;
        var opponentValue = (Math.floor(Math.random() * 5));
        getId(oppOptions[opponentValue]).style.borderColor = "red";
        function checking() {
            playerValue === opponentValue ? youDraw() :
                (playerValue === opponentValue - 1 ? youLose(youLoseMesssage(), oppScore()) :
                    (playerValue === opponentValue + 1 ? youWin(youWinMessage(), youScore()) :
                        (playerValue === opponentValue - 4 ? youWin(youWinMessage(), youScore()) :
                            (playerValue === opponentValue + 4 ? youLose(youLoseMesssage(), oppScore()) :
                                (playerValue === opponentValue - 2 ? youWin(youWinMessage(), youScore()) :
                                    (playerValue === opponentValue + 2 ? youLose(youLoseMesssage(), oppScore()) :
                                        (playerValue === opponentValue + 3 ? youWin(youWinMessage(), youScore()) :
                                            youLose(youLoseMesssage(), oppScore()))))))));
        }
        console.log(checking());
        console.log("You picked " + arrOptions[playerValue]);
        console.log("Opponent picked " + arrOptions[opponentValue]);
    });
});
