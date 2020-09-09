var arrOptions = ["Rock", "Paper", "Scissor"];
function getId(par) { return document.getElementById(par); }
function listenPar(par, par2, par3) { return getId(par).addEventListener(par2, par3); }
function inner(par, par4) { return (getId(par).innerHTML = par4); }
function youWin() { inner("choice", "You Win !"); }
function youDraw() { (inner("choice", "It's a draw")); }
function youLose() { inner("choice", "You Lose..."); }
arrOptions.forEach(function (option, i) {
    listenPar(arrOptions[i], "click", function () {
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
