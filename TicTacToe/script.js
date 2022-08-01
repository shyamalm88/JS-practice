let turn = "X";

const changeTurn = () => {
  turn = turn === "X" ? "0" : "X";
};

const checkForWin = () => {
  let allBoxText = document.getElementsByClassName("text");
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      allBoxText[e[0]].innerText != "" &&
      allBoxText[e[0]].innerText == allBoxText[e[1]].innerText &&
      allBoxText[e[1]].innerText == allBoxText[e[2]].innerText
    ) {
      const info = document.getElementById("info");
      info.innerText = allBoxText[e[0]].innerText + " Won";
    }
  });
};

const boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((elem) => {
  let boxText = elem.querySelector(".text");
  elem.addEventListener("click", () => {
    if (boxText.innerText == "") {
      boxText.innerText = turn;
      changeTurn();
      checkForWin();
    }
  });
});
