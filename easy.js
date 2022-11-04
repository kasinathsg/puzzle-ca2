// backgroundSound
const backgroundSound = new Audio("./bgm.mp3.mp3");
backgroundSound.play();
backgroundSound.loop = true;

var rows = 2;
var columns = 2;

var currTile; //first  tile
var otherTile; //next tile

var turns = 0;

var imgOrder = ["2","4","1","3"]

// displaying images
window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".1.1.jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around 
            tile.addEventListener("dragenter", dragEnter);  //dragging image to another image
            tile.addEventListener("dragleave", dragLeave);  //image leaving another image
            tile.addEventListener("drop", dragDrop);        // drop the image
            tile.addEventListener("dragend", dragEnd);      // swapping the two images

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; 
}


function dragEnd(){
    let currImg= currTile.src;
    let otherImg= otherTile.src;

    currTile.src=otherImg;
    otherTile.src=currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
    localStorage.setItem("dragEnd",turns);
}


// timer
var timer=10;
setInterval(function(){
    timer--;

    if(timer>=0){
        a=document.getElementById("timer");
        a.innerHTML= timer;
    }

    if(timer===0){
        location.href = "./lose.html";
    }
},1000)
