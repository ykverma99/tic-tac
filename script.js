let board = document.getElementById("board");
let info = document.getElementById("info");
let boardSize = ["", "", "", "", "", "", "", "", ""];

let value = "circle";
info.textContent = "circle goes first";

function createBoard() {
  boardSize.forEach((_, i) => {
    const cellElements = document.createElement("div");
    cellElements.classList.add("square");
    cellElements.id = i;
    board.append(cellElements);
    cellElements.addEventListener("click", addGo);
  });
}

createBoard();
function addGo(e) {
  const val = document.createElement("div");
  val.classList.add(value);
  e.target.append(val);
  value = value === "circle" ? "cross" : "circle";
  info.textContent = "It is now " + value + "'s go.";
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  let pieces = document.querySelectorAll(".square");
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let circleWins,crossWins;
  winningCombo.forEach((arr) => {
    circleWins = arr.every((cell) =>
      pieces[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      info.textContent = "Circel Wins!";
      pieces.forEach((square) => square.replaceWith(square.cloneNode(true)));
      return;
    }
  });

  winningCombo.forEach((arr) => {
    crossWins = arr.every((cell) =>
      pieces[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      info.textContent = "Cross Wins!";
      pieces.forEach((square) => square.replaceWith(square.cloneNode(true)));
      return;
    }
  });

}
