const container = document.querySelector('.container');
let gridSize = 16;


function createGrid(size) {
    container.innerHTML = '';
    let isDrawing = false;

    document.addEventListener('mousedown', () => isDrawing = true);
    document.addEventListener('mouseup', () => isDrawing = false);

    for (let j = 0; j < size; j++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseover', () => {
                if (isDrawing) {
                    div.style.backgroundColor = 'black';
                }
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

createGrid(gridSize);

const gridSizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');

function gridSizeIncrease(newSize) {
    gridSize *= 2;
    createGrid(gridSize);

    if (gridSize === 128) {
        gridSize = 8;
    }
}

function resetGrid() {
    document.querySelectorAll('.grid-item').forEach(div => {
        div.style.backgroundColor = 'white';
    })
}

gridSizeBtn.addEventListener('click', gridSizeIncrease);
resetBtn.addEventListener('click', resetGrid);