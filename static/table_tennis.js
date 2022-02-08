function addSubscriber() {
    "use strict";
    const email = document.getElementById("register-email").value;
    
    //RFC 3696 compliant email regex
    //Credit to https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.match(mailFormat)) {
        document.getElementById("bad-email").style.display = "none";
    }
    else {
        document.getElementById("bad-email").style.display = "block";
        return;
    }
    
    console.log("Adding subscriber.");
    
    const subscribers = document.getElementById("subscribers");
    const newSubscriber = document.createElement("li");
    newSubscriber.appendChild(document.createTextNode(email));
    subscribers.appendChild(newSubscriber);
}
