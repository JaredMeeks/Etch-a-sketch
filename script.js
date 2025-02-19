const container = document.querySelector('.container');
let gridSize = 16;


function createGrid(size) {
    container.innerHTML = '';

    for (let j = 0; j < size; j++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

createGrid(gridSize);