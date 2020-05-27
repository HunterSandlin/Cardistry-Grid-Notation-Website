//vars for canvas
let canvas = document.getElementById('newPacket');
let context = canvas.getContext('2d');
context.font = "100px Arial";
//center line for centering text, used in updateCanvas()
context.lineWidth = 0;
context.moveTo(500, 1000);
context.lineTo(500, 0);
context.stroke();
const placement = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
}

window.onload = function(){ 
    this.updateCanvas();
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
    document.getElementById("dropdownFingerSide").innerText = event.target.innerText;
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

/* Object to hold attributes of canvas.
    Each button has its own nested object,
    all possible values are present but false.
*/
const canvas_attributes = {
    //Figner Placement option: numbers on outside of boxes  
    fingerPlacement: {
        //each includes array of numbers (each finger is assigned a number via CGN doc)
        top: [],
        bottom: [],
        left: [],
        right: []
    }
}

/* Function to update the canvas, heavylifter of code.
    Goes through each method and sees what to set.    
*/
function updateCanvas() {
    //clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
/* UPDATE FINGER PLACEMENT */
    //top
    //top and bottom are just centered on invisible line running down center 
    let tempString = '';
    canvas_attributes.fingerPlacement.top.sort().forEach( num =>
        tempString += ' ' + num
    );
    context.textAlign = "center";
    context.fillText(tempString, 500, 130);
    //bottom
    tempString = '';
    canvas_attributes.fingerPlacement.bottom.sort().forEach( num =>
        tempString += ' ' + num
    );
    context.textAlign = "center";
    context.fillText(tempString, 500, 950);
    //left
    //left and right calculate a starting spot and add text going down in intrivals
    let tempCount = 1;
    let startingPoint = 400 - 40 * (canvas_attributes.fingerPlacement.left.length - 1);
    canvas_attributes.fingerPlacement.left.sort().forEach( num => {
        context.fillText(num, 90, startingPoint + 100 * tempCount);
        tempCount += 1;
    });
    //right
    tempCount = 1;
    startingPoint = 400 - 40 * (canvas_attributes.fingerPlacement.right.length - 1);
    canvas_attributes.fingerPlacement.right.sort().forEach( num => {
        context.fillText(num, 910, startingPoint + 100 * tempCount);
        tempCount += 1;
    });

}

//Updates everything when Finger Placement options are clicked (expluding checkboxes)
function fingerPlaceBtnUpdate() {
    //update buttoms
    let boxes = document.getElementById('thumbFinger');
    //location box - drop down value, trim in case of extra space, and lower caser it (ex. 'top', 'bottom')
    let loca = document.getElementById('dropdownFingerSide').innerText.trim().toLowerCase();
    //see if it is left or not
    let left = document.getElementById('radFingerSideLeft').checked;
    //canvas_attributes.fingerPlacement[loca]
    if (left) {
        document.getElementById('thumbFinger').checked = canvas_attributes.fingerPlacement[loca].includes(1);
        document.getElementById('indexFinger').checked = canvas_attributes.fingerPlacement[loca].includes(2);
        document.getElementById('middleFinger').checked = canvas_attributes.fingerPlacement[loca].includes(3);
        document.getElementById('ringFinger').checked = canvas_attributes.fingerPlacement[loca].includes(4);
        document.getElementById('pinkyFinger').checked = canvas_attributes.fingerPlacement[loca].includes(5);
    } else  {
        document.getElementById('thumbFinger').checked = canvas_attributes.fingerPlacement[loca].includes(6);
        document.getElementById('indexFinger').checked = canvas_attributes.fingerPlacement[loca].includes(7);
        document.getElementById('middleFinger').checked = canvas_attributes.fingerPlacement[loca].includes(8);
        document.getElementById('ringFinger').checked = canvas_attributes.fingerPlacement[loca].includes(9);
        document.getElementById('pinkyFinger').checked = canvas_attributes.fingerPlacement[loca].includes(10);
    }
    updateCanvas();

}

function updateFingerPlace(event, num) {
    let loca = document.getElementById('dropdownFingerSide').innerText.trim().toLowerCase();
    let left = document.getElementById('radFingerSideLeft').checked;
    let attr = canvas_attributes.fingerPlacement[loca];

    if (event.target.checked) {
    //add num if on left, otherwise it is right which the corresponding finger is the left's number plus 5
        left ? attr.push(num): attr.push(num + 5);
        console.log(attr);
    } else {
        console.log('goodbye');
        left ? attr.splice(attr.indexOf(num, 1)): attr.splice(attr.indexOf(num + 5, 1));
    }
    updateCanvas();
    console.log('what????')
}
