export var isAlive = "SingleDialogueIntro.mjs";

export var intro;
export var messages = ["ox_xo", "oops no message set"];
var nextMessage = "";
export function updateMessage() {
    console.log("startMessageLog");
    if ((nextMessage = messages.pop()) != undefined) {
        console.log(nextMessage);
        //document.getElementById("SampleWidget").children[0].innerText = nextMessage;
        document.getElementById("introDialogue_T0").innerText = nextMessage;
        if (messages.length == 1) {
            //document.getElementById("SampleWidget").children[0].classList.toggle("lastRun");
            document.getElementById("introDialogue_T0").classList.toggle("lastRun");
            setTimeout(function () {
                /*DOSTUFF.*/
                addStartButton("SampleWidget");
            }, 4000 + 1000);
        }
    }
    else {
        clearInterval(intro);
    }
}
export function addStartButton(id) {
    var button = document.createElement("BUTTON");
    button.type = "button";
    button.innerText = "Preview Widgets";
    button.classList.add("show");
    document.getElementById(id).append(button);
}

export function getMessagesIfAny(id) {
    console.log("Checking if it has messages now..");
    if(document.getElementById(id).attributes.messages != undefined){
        messages = document.getElementById(id).attributes.messages;
    }
}

export function showMessages(){
    console.log("should only see this once");
    intro = setInterval(updateMessage, 4000);
}