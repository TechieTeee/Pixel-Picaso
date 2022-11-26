// Import Elements and Assign Them to Associated Variables
var save = document.getElementById('save');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var toggle = document.getElementById('toggle');
const colorSelect = document.getElementById('colorPicker');
const sizeSelect = document.getElementById('sizePicker');
const canvas = document.getElementById('canvas');

// Make Grid Function
// Color the selected cell by calling function
function makeGrid(height, width) {
    let grid = '';
    for (let r = 0; r < height; r++) {
        grid += '<tr class = "row-' + r + '">';
        for (let c = 0; c < width; c++) {
            grid += '<td class = "cell" id + "row-' + r + 'cell-' + c + '"></td>';
        }
        grid += '</tr>';
    }
    canvas.innerHTML = grid;
    coloringClickedCell();
};

// Color Cell Function
function coloringClickedCell() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener ("click", function(event) {
            event.target.style.backgroundColor = colorSelect.value;
        });
    };
};

// Make grid with the height and width inputs
sizeSelect.onsubmit = function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
};
