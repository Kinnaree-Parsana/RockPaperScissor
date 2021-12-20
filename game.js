function game(n){
    let countp=0,countc=0;
    for(let i=0;i<n;i++){
        function computerPlay(inp){
            let num = Math.floor(Math.random() * 3);
            let str="";
            if(num==0){
                str="rock";
            }else if(num==1){
                str="paper";
            }else{
                str="scissor";
            }
            return str;
        }

        function playerPlay(inp1){
            let str1 = prompt("Enter your choice: ");
            return str1;
        }  

        function playRound(playerSelection, computerSelection) {
            console.log("Computer's choice is: ",computerSelection);
            console.log("Player's choice is: ",playerSelection);
            let strp=playerSelection.toLowerCase();
            let strc=computerSelection;
            if(strp=="rock" && strc == "rock" || strp=="paper" && strc == "paper" || strp=="scissor" && strc == "scissor"){
                return "It's a Tie!!";
            }else if(strp=="rock" && strc == "scissor" || strp=="scissor" && strc == "paper" || strp=="paper" && strc == "rock"){
                countp+=1;
                return "Current player's count is: "+countp;
            }else{
                countc+=1
                return "Current computer's count is: "+countc;
            }
        }
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(countp==countc){
        console.log("It's a tie!! points are",countp,countc);
    }else if(countp>countc){
        console.log("Player wins with points of",countp);
    }else{
        console.log("Computer wins with points of",countc);
    }
}
let iter=5;
game(iter);