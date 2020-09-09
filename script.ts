const arrOptions: string[] = ["Rock", "Paper", "Scissor"]
function getId(par:string){ return document.getElementById(par)}
function listenPar(par:string,par2:string,par3:any){ return getId(par).addEventListener(par2, par3)}
function inner(par:string, par4:string){ return (getId(par).innerHTML= par4) }
function youWin() {inner("choice", "You Win !")}
function youDraw() {(inner("choice", "It's a draw"))}
function youLose() {inner("choice", "You Lose...")}
arrOptions.forEach((option:string, i:number)=>{
    listenPar(arrOptions[i], "click", ()=>{
        let playerValue = i
        let opponentValue = (Math.floor(Math.random() * 3))
        switch (playerValue){
            case(0):
                switch(opponentValue){
                    case(0):youDraw(); break;
                    case(1):youLose(); break;
                    case(2):youWin();break;
                    }break;
            case(1):
                switch(opponentValue){
                    case(0):youWin(); break;
                    case(1):youDraw(); break;
                    case(2):youLose();break;
                }break;
            case(2):
                switch(opponentValue){
                    case(0):youLose(); break;
                    case(1):youWin(); break;
                    case(2):youDraw();break;
                }break;
        }
    })
})


