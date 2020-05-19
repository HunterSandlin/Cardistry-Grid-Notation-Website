//function for when the form  to make a box is submitted 
window.onload = function(){ 
    //TODO: add elements to canvas as selected by user
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
    //if it is coming from the bank
    if (drag.lastEvent.className === "div_pickup") {
        //clone node to make a copy BUT now it has the same id
        let clone = document.getElementById(data).cloneNode(false);
        clone.id = '';
        event.target.appendChild(clone);
    } else if (drag.lastEvent.className === "div_dropbox") {
        event.target.appendChild(document.getElementById(data));
    }
    drag.lastPicture.id = '';
}

