let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let msg= document.querySelector(".msg");
let para = document.querySelector("p");
let newBtn = document.querySelector("#new-btn");
//checks for player's turn
let playerTurn = true;

//winning pattern
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//adding click event on btns so that players can play turn by turn
btns.forEach(btn => {
    btn.addEventListener("click",()=> {
        //if true then X player's turn
        if(playerTurn) {
            btn.innerText = "X";
            btn.style.color = "#06070E";
            playerTurn = false;
        }
        //O player's turn
        else {
            btn.innerText = "O";
            btn.style.color = "#C42847";
            playerTurn = true;
        }
        //disables the clicked button
        btn.disabled = true;
        checkWinner();
    })
});


//check winner
const checkWinner = () => {
    for(let pattern of winningPattern) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                para.innerText = `Winner is ${pos1Val} 🥇`;
                msg.classList.remove("hide")
                disableBtns;
            }
        }
    }
}


const disableBtns = () => {
    for(let btn of btns) {
        btn.disabled = true;
        btn.innerText = "";
    }
}

const EnableBtns = () => {
    for(let btn of btns) {
        btn.disabled = false;
    }
}


const resetGame = () => {
    playerTurn = true;
    disableBtns();
    EnableBtns();
    msg.classList.add("hide")
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame)