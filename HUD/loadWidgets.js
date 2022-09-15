"use strict";

function initialize(){
    console.log("Ready to Add Things.");
    document.getElementById("Container").innerHTML = '<single-dialogue-intro id="SampleWidget"></single-dialogue-intro>';
}

const iframe = document.getElementById("allTheTemplates");

function getCustomTemplate(name){
    //const iframe = document.getElementById("allTheTemplates");
    console.log(iframe);
    const iframeNode = iframe.contentWindow.document.getElementById(name);
    console.log(iframeNode);
    console.log("Domain: ",document.domain,".");
    const newNode = document.importNode(iframeNode, true);
    return newNode;
}

class SingleDialogueIntro extends HTMLElement{
    constructor(){
        super();
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
        intro = setInterval(updateMessage, 4000);

    }
}
customElements.define('single-dialogue-intro', SingleDialogueIntro);