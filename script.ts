const arrOptions: string[] = ["Rock", "Paper", "Scissor", "Spock", "Lizard"]
const oppOptions: string[] = ["oppRock", "oppPaper", "oppScissor", "oppSpock", "oppLizard"]
let yourScore:number = 0
let oppoScore:number = 0
function getId(par:string){ return document.getElementById(par)}
function listenPar(par:string,par2:string,par3:any){ return getId(par).addEventListener(par2, par3)}
function inner(par:string, par4:string){ return (getId(par).innerHTML= par4) }
function youWin() {inner("choice", "You Win !");yourScore ++;inner("youScore", "Score: " + yourScore )}
function youDraw() {(inner("choice", "It's a draw"))}
function youLose() {inner("choice", "You Lose..."); oppoScore++; inner("oppScore", "Score: " + oppoScore)}
arrOptions.forEach((option:string, i:number)=>{
    listenPar(arrOptions[i], "click", ()=>{
        for(var b = 0; b < oppOptions.length; b++ ){getId(oppOptions[b]).style.borderColor = "white";getId(arrOptions[b]).style.borderColor = "white";}
        getId(arrOptions[i]).style.borderColor = "green";
        let playerValue = i
        let opponentValue = (Math.floor(Math.random() * 5))
        getId(oppOptions[opponentValue]).style.borderColor = "red";
        function checking(){playerValue === opponentValue ? youDraw():
            (playerValue === opponentValue-1 ? youLose():
                (playerValue===opponentValue+1 ? youWin():
                    (playerValue===opponentValue-4? youWin():
                        (playerValue===opponentValue+4? youLose():
                            (playerValue === opponentValue-2 ? youWin():
                                (playerValue===opponentValue+2 ? youLose():
                                    (playerValue===opponentValue+3 ? youWin():
                                    youLose()
                                    )))))))}
        console.log(checking())
        console.log("You picked " + arrOptions[playerValue])
        console.log("Opponent picked " + arrOptions[opponentValue])
    })
})


