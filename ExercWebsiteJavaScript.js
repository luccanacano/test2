function showMessage() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const fulladdress = document.getElementById("fulladdress").value;
    const suburb = document.getElementById("suburb").value;
    const postcode = document.getElementById("postcode").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;
    const askmessage = document.getElementById("askmessage").value;

    document.getElementById("message").textContent =
        "Form submitted! " +
        "Hello " + name + 
        " (" + gender + "). " + 
        "Our expert will contact you at " + email + (phone ? " on phone: " + phone : "") + 
        " on address " + fulladdress + " on suburb " + suburb + " post code " + postcode + " state of " + state +
        " with the answer for " + askmessage;

    console.log("Form Data:", {
        username, email, name, lastname, gender, fulladdress,suburb, postcode, state, phone
    });

    console.log("User has", name.length, "characters in name");

        window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}




function contshowMessage(){
    const contname = document.getElementById("contname").value;
    const contemail = document.getElementById("contemail").value;
    const contmessagefield = document.getElementById("contmessagefield").value;

    document.getElementById("contmessage").textContent =
        "Form submitted! " +
        " Hello " + contname + " We'll contact you at " + contemail + " with the answer for " + contmessagefield;

    console.log("Form Data:", {
        contemail, contname, contmessagefield
    });

    

}

function resetform() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirpassword").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const fulladdress = document.getElementById("fulladdress").value;
    const suburb = document.getElementById("suburb").value;
    const postcode = document.getElementById("postcode").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;

}



function IrParaIndex(){             window.location.href = "index.html";}
function IrPara01_AskExpert(){      window.location.href = "01_AskExpert.html";}
function IrPara02_ContactUs(){      window.location.href = "02_ContactUs.html";}
function IrPara03_Services(){       window.location.href = "03_Services.html";}
function IrPara04_SiteMap(){        window.location.href = "04_SiteMap.html";}
function IrPara05_Blog(){           window.location.href = "05_Blog.html";}