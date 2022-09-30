"use strict";

//This file contains some commented out sections from past debugging(previous iterations) and others for possible future setup.

/*keeping this here just in case I might need to do imports here this way later for now*/
//REMOVE LATER IF NOT USED.
/*var single_dialogue_intro_module;
import("./SingleDialogueintro.js").then((module) => { 
        console.log(module.isAlive);
        single_dialogue_intro_module = module;
        single_dialogue_intro_module.check = "loadWidget(from)";

    }).catch((err) => {
        console.log(err.message);
    });*/

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

//Start of custom elements.
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

        this.run(this.id);
    }
    /*static get observedAttributes() { return ['messages,animDelay,callbackFunc']; }*/

    /*attributeChangedCallback(attrName, oldValue, newValue) {
        this[attrName] = this.hasAttribute(attrName);
    }
    get messages() {
        return this;
    }
    set messages(msg) {
        if (true) {
            this.setAttribute('messages', msg);
        } else {
            this.removeAttribute('messages');
        }
    }*/
    run(id){
        setTimeout(function(){console.log("Up?:",typeof single_dialogue_intro_module != "undefined"); console.log(single_dialogue_intro_module.isAlive);},5000);
 
        if(typeof single_dialogue_intro_module != "undefined"){
            single_dialogue_intro_module.getMessagesIfAny(this.id);
            single_dialogue_intro_module.intro = setInterval(updateMessage, 4000);
            console.log(single_dialogue_intro_module.messages);
        } else {
            setTimeout(
                function(){
                    //checking this before finalizing the new setup
                    console.log("Checking id in new method:",id,":");
                    //single_dialogue_intro_module.getMessagesIfAny("SampleWidget");
                    single_dialogue_intro_module.getMessagesIfAny(id);
                    single_dialogue_intro_module.showMessages();
                    
                    console.log("has changed messages to ",single_dialogue_intro_module.messages);
                },4000
            );
        }
    }
    static changeMessage(sdi, m) {
        console.log(sdi, m);
        sdi.attributes.messages = m;
        console.log("Check if set:", sdi.attributes.messages/*.value*/);
    }

}
customElements.define('single-dialogue-intro', SingleDialogueIntro);

/*ADD MORE ELEMENTS HERE*/

/*ADD MORE ELEMENTS HERE*/

/*ADD MORE ELEMENTS HERE*/