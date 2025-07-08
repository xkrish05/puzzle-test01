var rows = 3;
var columns = 3;

var currTile;
var otherTile; // Blank Tile

var turns = 0;

var imgOrder = ["4","2","8","5","1","6","7","9","3"];

window.onload = function(){
    for(let r=0; r<rows; r++){
        for(let c = 0; c < columns; c++){

            // <img id = "0-0" src = "1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            // Drag Funcationaity
            tile.addEventListener("dragstart", dragStart); // click an image to drag
            tile.addEventListener("dragover", dragOver); // moving image around while clicked
            tile.addEventListener("dragcenter", dragCenter); // dragging image to another one
            tile.addEventListener("dragleave", dragLeave); // dragged image leaving another image
            tile.addEventListener("drop", dragDrop); // drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd); // after drag drop, swap the two tile

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart(){
    currTile = this; // this refer to the img tile being dragged
}

function dragOver(e){
    e.preventDefault();
}

function dragCenter(e){
    e.preventDefault();
}

function dragLeave(){
}

function dragDrop(){
    otherTile = this; // this refers to the img tile being dropped on
}

function dragEnd(){
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}