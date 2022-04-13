createGrid(16)
draw()
newGrid()


function createGrid(gridSize) {
    const outerContainer = document.querySelector('body');
    const container = document.createElement('div')
    container.classList.add('container');
    container.id = 'container'
    outerContainer.appendChild(container);

    for (let i=0; i<gridSize; i++){
        const outerGrid = document.querySelector('#container')
        const row = document.createElement('div')
        row.classList.add('row')
        row.id = `row${i}`
        outerGrid.appendChild(row)
    }

    for (let i=0; i<gridSize; i++){  
        for (let i=0; i<gridSize; i++){  
            const outerRow = document.querySelector(`#row${i}`)
            const grid = document.createElement('div');
            grid.classList.add('grid');
            // grid.textContent = `box`
            outerRow.appendChild(grid);
        }
    }
}

function draw () {
    const divs = document.querySelectorAll('.grid')
    divs.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            const red = Math.floor(Math.random()*255)
            const green = Math.floor(Math.random()*255)
            const blue = Math.floor(Math.random()*255)
            const randomColor = `rgb(${red}, ${green}, ${blue})`
            e.target.style.background = randomColor;
        });
    });
}


function newGrid() {
    const cntr = document.querySelector('#container')
    const button = document.querySelector('button')
    button.addEventListener('click', () => {
        let answer = parseInt(prompt("How large of a grid (1-100)? "))
        if (answer > 0 && answer < 100) {
            cntr.textContent = "";
            createGrid(answer)
            draw()
        }
        else {
            alert("Grid must be between 1 and 100.")
        }
        
    });
}

