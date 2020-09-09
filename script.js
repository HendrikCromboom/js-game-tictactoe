var tictactoe = ["Rock", "Paper", "Scissor"];
function getId(par) { return document.getElementById(par); }
function inner(par) { return getId(par).innerHTML; }
function listenPar(par, par2, par3) { return getId(par).addEventListener(par2, par3); }
tictactoe.forEach(function (ttt, i) {
    listenPar(tictactoe[i], "click", function () {
        var playerValue = i;
        var opponentValue = (Math.floor(Math.random() * 3));
        switch (playerValue) {
            case (0):
                switch (opponentValue) {
                    case (0):
                        youDraw();
                        break;
                    case (1):
                        youLose();
                        break;
                    case (2):
                        youWin();
                        break;
                }
                break;
            case (1):
                switch (opponentValue) {
                    case (0):
                        youWin();
                        break;
                    case (1):
                        youDraw();
                        break;
                    case (2):
                        youLose();
                        break;
                }
                break;
            case (2):
                switch (opponentValue) {
                    case (0):
                        youLose();
                        break;
                    case (1):
                        youWin();
                        break;
                    case (2):
                        youDraw();
                        break;
                }
                break;
        }
    });
});
function youWin() { getId("choice").innerHTML = "You Win !"; }
function youDraw() { getId("choice").innerHTML = "It's a draw, try again!"; }
function youLose() { getId("choice").innerHTML = "You Lose..."; }
