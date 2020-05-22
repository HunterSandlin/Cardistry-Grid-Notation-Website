//vars for canvas
let canvas = document.getElementById('newPacket');
let context = canvas.getContext('2d');
const placement = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
}


//function for when the form  to make a box is submitted 
window.onload = function(){ 
    //set canvas to default packet
    addImage('packets/nullPacket.png');
};


function allowDrop(event) {
    event.preventDefault();
}
  
let drag = (event) => {
    event.target.id = "inMotion";
    event.dataTransfer.setData("text", "inMotion");
    drag.lastEvent = event.currentTarget.parentNode;
    drag.lastPicture = event.target;
}


function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text"); 
    console.log(data.parentNode);
    //if it is coming from the user created packet
    if (drag.lastEvent.className === "div_pickup") {
        let clone = copyCanvas(document.getElementById(data));
        clone.id = '';
        event.target.appendChild(clone);
    //if it is already in the sheet
    } else if (drag.lastEvent.className === "div_dropbox") {
        event.target.appendChild(document.getElementById(data));
    }
    drag.lastPicture.id = '';
}
 
//makes new canvas with required properties for dragging.
function copyCanvas(oldCanvas) {
    
    //create a new canvas
    let newCanvas = oldCanvas.cloneNode();
    let newContext = newCanvas.getContext('2d');
    //set defaults
    newCanvas.id = '';
    //apply the old canvas to the new one
    newContext.drawImage(oldCanvas, 0, 0);
    //return the new canvas
    return newCanvas;
}

//set the dropdown menu for selecting side of packet number
function setPacketSideButton(event) {
    document.getElementById("packSideSelect").innerText = event.target.innerText;
}

//adds images to the canvas, pass in the image location as string ex. 'images/foo.png'
function addImage(imgSrc) {
    //check to ensure param is a string
    if (typeof imgSrc != 'string') {
        console.log('ERROR in addImage: invalid image. Must be a passed as a string.');
        return;
    }
    let addedLayer = new Image();
    addedLayer.src = imgSrc;
    //waits for the new image to load then adds it to fill canvas
    addedLayer.onload = function() {
      context.drawImage(addedLayer, 0, 0, canvas.width, canvas.width);
    };
}

//adds a number to side of packet, takes placement enum, and a number
function addNumber(loca, number) {
    //check to ensure loca and number and a placement enum and number respectively
    if (Object.values(placement).indexOf(loca) > -1) {
        console.log('ERROR in addNumber: invalid location (loca). Must be valid placement.');
        return;
    }
    if (typeof number != "number") {
        console.log('ERROR in addNumber: invalid number.');
        return;
    }
    //TODO: check if more numbers are selected
    //add acordingly
}