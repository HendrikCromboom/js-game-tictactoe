var arrOptions = ["Rock", "Paper", "Scissor"];
var oppOptions = ["oppRock", "oppPaper", "oppScissor"];
function getId(par) { return document.getElementById(par); }
function listenPar(par, par2, par3) { return getId(par).addEventListener(par2, par3); }
function inner(par, par4) { return (getId(par).innerHTML = par4); }
function youWin() { inner("choice", "You Win !"); }
function youDraw() { (inner("choice", "It's a draw")); }
function youLose() { inner("choice", "You Lose..."); }
arrOptions.forEach(function (option, i) {
    listenPar(arrOptions[i], "click", function () {
        for (var b = 0; b < oppOptions.length; b++) {
            getId(oppOptions[b]).style.color = "white";
            getId(arrOptions[b]).style.color = "white";
        }
        getId(arrOptions[i]).style.color = "green";
        var playerValue = i;
        var opponentValue = (Math.floor(Math.random() * 3));
        getId(oppOptions[opponentValue]).style.color = "red";
        function checking() { playerValue === opponentValue ? youDraw() : (playerValue === opponentValue - 1 ? youLose() : (playerValue === opponentValue + 1 ? youWin() : (playerValue === opponentValue - 2 ? youWin() : youLose()))); }
        console.log(checking());
        console.log("You picked " + arrOptions[playerValue]);
        console.log("Opponent picked " + arrOptions[opponentValue]);
    });
});
