const container = document.getElementById("container");
var rows = document.getElementsByClassName("gridRow")
var cells = document.getElementsByClassName("cell");
const reset = document.getElementsByClassName("reset")
defaultGrid()


function resetButton() 
 {
    let gridSize = Number(prompt("Enter a grid size between 0 and 100: "))
        createGrid(gridSize)
    }



function mouseOver() {
    let hoverCell = this;
    hoverCell.setAttribute("style", "background-color:blue")
}

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function createGrid(size) {
    makeRows(size);
    makeColumns(size);
}


function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow"
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++){
        let newCell = document.createElement("div");
        rows[j].appendChild(newCell).className = "cell";
        newCell.addEventListener("mouseover", mouseOver, false)
        }
    }
}

