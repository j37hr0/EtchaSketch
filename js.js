const container = document.getElementById("container");
const reset = document.getElementsByClassName("reset")

createGrid(16)

function resetButton() 
 {
    container.replaceChildren()
    let gridSize = Number(prompt("Enter a grid size between 0 and 100: "))
    if (gridSize >= 1 && gridSize <= 100){
        createGrid(gridSize)
    }
    else {
        createGrid(16)
    }
    }

function mouseOver(color) {
    let hoverCell = this;
    hoverCell.setAttribute("style", `background-color:${color}`)
}

function createGrid(gridSize) {
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1 / gridSize) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1 / gridSize) * 650}px)`);
    for (let i = 0; i < gridSize * gridSize; i++)
    { 
        const child = document.createElement('div');
        child.style.border = "1px solid teal";
        container.appendChild(child);
        child.style.backgroundColor = "white";
        let randomColor = Math.floor(Math. random()*16777215).toString(16);
        child.addEventListener('mouseover', () => {
            if (document.querySelector('select').value === "Rainbow") {
                child.style.backgroundColor = randomColor;
            }
            else if (document.querySelector('select').value === "Pink") {
                child.style.backgroundColor = "pink"
            }
            else if (document.querySelector('select').value === "Black")
            child.style.backgroundColor = "black"
        });
        
    }
}