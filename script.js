document.addEventListener("DOMContentLoaded", function(){
   
    console.log("hi")
})

function createBoard() {
    let board = document.querySelector(".board")

    board.style.gridTemplateColumns = "repeat(16, 1fr)";
    board.style.gridTemplateRows = "repeat(16, 1fr)";
    
}