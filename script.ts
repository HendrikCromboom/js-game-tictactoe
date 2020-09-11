const arrOptions: string[] = ["Rock", "Paper", "Scissor", "Spock", "Lizard"]
const oppOptions: string[] = ["oppRock", "oppPaper", "oppScissor", "oppSpock", "oppLizard"]
let yourScore:number = 0
let oppoScore:number = 0
function getId(id:string):HTMLElement{ return document.getElementById(id)}
function listenPar(id:string,event:string,func:any):void{ return getId(id).addEventListener(event, func)}
function inner(id:string, innerHTML:string):string{ return (getId(id).innerHTML= innerHTML) }
function youWinMessage():void {inner("choice", "You Win !")}
function youDraw():void {inner("choice", "It's a draw")}
function youLoseMesssage():void {inner("choice", "You Lose...")}
function youScore(){yourScore ++;inner("youScore", "Score: " + yourScore)}
function oppScore(){oppoScore++; inner("oppScore", "Score: " + oppoScore)}
let youWin: (a:void, b:void) => Function;
let youLose: (a:void, b:void) => Function;
arrOptions.forEach((option:string, i:number):void=>{
    listenPar(arrOptions[i], "click", ()=>{
        for(let b = 0; b < oppOptions.length; b++ ){getId(oppOptions[b]).style.borderColor = "white";getId(arrOptions[b]).style.borderColor = "white";}
        getId(arrOptions[i]).style.borderColor = "green";
        let playerValue:number = i
        let opponentValue:number = (Math.floor(Math.random() * 5))
        getId(oppOptions[opponentValue]).style.borderColor = "red";
        function checking():void{playerValue === opponentValue ? youDraw():
            (playerValue === opponentValue-1 ? youLose(youLoseMesssage(), oppScore()):
                (playerValue===opponentValue+1 ? youWin(youWinMessage(), youScore()):
                    (playerValue===opponentValue-4? youWin(youWinMessage(), youScore()):
                        (playerValue===opponentValue+4? youLose(youLoseMesssage(), oppScore()):
                            (playerValue === opponentValue-2 ? youWin(youWinMessage(), youScore()):
                                (playerValue===opponentValue+2 ? youLose(youLoseMesssage(), oppScore()):
                                    (playerValue===opponentValue+3 ? youWin(youWinMessage(), youScore()):
                                            youLose(youLoseMesssage(), oppScore())
                                    )
                                )
                            )
                        )
                    )
                )
            )
        }
        console.log(checking())
        console.log("You picked " + arrOptions[playerValue])
        console.log("Opponent picked " + arrOptions[opponentValue])
    })
})


