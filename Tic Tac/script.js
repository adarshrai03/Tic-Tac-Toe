let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".messageContainer");
let message = document.querySelector("#message");
let count = 0;

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],

];


boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner(count);
    })
});


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledButton = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}


const showWinner = (winner)=>{
    message.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledButton();
}

const showLosser = ()=>{
    message.innerText = "Match Draw";
    msgContainer.classList.remove("hide");
    disabledButton();

}


const checkWinner = (count)=>{

    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner" , pos1Val);

                showWinner(pos1Val);

            }
            else if(count>=9){
                showLosser();
            }
        }
    }

    
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);




