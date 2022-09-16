"use strict";

function initialize() {
    //console.log("Ready to Add Things.");
    //document.getElementById("Container").innerHTML = '<single-dialogue-intro id="SampleWidget"></single-dialogue-intro>';

    document.getElementsByTagName("noscript")[0].remove();

    var introMessageReversed = [
        "Thank you for your patience.",
        "ETA to completion TBD.",
        "The developer is working on more widgets.",
        "Nothing fancy this first time around.",
        "Welcome, please wait while we get things set up.",
        "Hello."
    ];
    var sayHello = new SingleDialogueIntro();
    SingleDialogueIntro.changeMessage(sayHello, introMessageReversed);
    document.getElementById("Container").appendChild(sayHello);
}

const iframe = document.getElementById("allTheTemplates");

function getCustomTemplate(name) {
    //const iframe = document.getElementById("allTheTemplates");
    console.log(iframe);
    const iframeNode = iframe.contentWindow.document.getElementById(name);
    console.log(iframeNode);
    console.log("Domain: ", document.domain, ".");
    const newNode = document.importNode(iframeNode, true);
    return newNode;
}

class SingleDialogueIntro extends HTMLElement {
    constructor() {
        super();
        this.id = "SampleWidget";
    }
    connectedCallback() {
        //the dummy tester.
        /*this.innerHTML = `<p>...</p>`;
        console.log("created SingleDialogueIntro");*/

        //the real work.
        ///*grab it from iframe instead*/const template = document.getElementById('single-dialogue-intro-template');
        const template = getCustomTemplate('single-dialogue-intro-template');
        const node = document.importNode(template.content, true);
        this.appendChild(node);
        getMessagesIfAny(this.id);
        intro = setInterval(updateMessage, 4000);
        console.log(messages);
    }

    static changeMessage(sdi, m) {
        console.log(sdi, m);
        sdi.attributes.messages = m;
        console.log("Check if set:", sdi.attributes.messages/*.value*/);
    }

}
customElements.define('single-dialogue-intro', SingleDialogueIntro);