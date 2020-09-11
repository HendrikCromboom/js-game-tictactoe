var arrOptions = ["Rock", "Paper", "Scissor", "Spock", "Lizard"];
var oppOptions = ["oppRock", "oppPaper", "oppScissor", "oppSpock", "oppLizard"];
var yourScore = 0;
var oppoScore = 0;
function getId(par) { return document.getElementById(par); }
function listenPar(par, par2, par3) { return getId(par).addEventListener(par2, par3); }
function inner(par, par4) { return (getId(par).innerHTML = par4); }
function youWin() { inner("choice", "You Win !"); yourScore++; inner("youScore", "Score: " + yourScore); }
function youDraw() { (inner("choice", "It's a draw")); }
function youLose() { inner("choice", "You Lose..."); oppoScore++; inner("oppScore", "Score: " + oppoScore); }
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
                (playerValue === opponentValue - 1 ? youLose() :
                    (playerValue === opponentValue + 1 ? youWin() :
                        (playerValue === opponentValue - 4 ? youWin() :
                            (playerValue === opponentValue + 4 ? youLose() :
                                (playerValue === opponentValue - 2 ? youWin() :
                                    (playerValue === opponentValue + 2 ? youLose() :
                                        (playerValue === opponentValue + 3 ? youWin() :
                                            youLose())))))));
        }
        console.log(checking());
        console.log("You picked " + arrOptions[playerValue]);
        console.log("Opponent picked " + arrOptions[opponentValue]);
    });
});
