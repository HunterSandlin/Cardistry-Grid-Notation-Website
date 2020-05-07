//function for when the form  to make a box is submitted 
window.onload = function(){ 
    document.getElementById("generatePacket").onclick = function(){
        //get the checkboxes, leave null if none are checked
        let checkedOptions = document.querySelector(".options:checked") ? 
            document.querySelector(".options:checked").value : null;
        //switch case to find the corresponding image
        switch(checkedOptions) {
            case "singleCard":
                document.getElementsByClassName("generatedPicture")[0].src = "packets/singleCard.png"
              break;
            default:
                document.getElementsByClassName("generatedPicture")[0].src = "packets/nullPacket.png"
          }
      }
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

