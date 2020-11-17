// //----------About the Developer----------//

function showMore(){
    document.getElementById("readMore").innerHTML = '<a href="javascript:showLess()" id="readMore">Read Less</a>'
    document.getElementById("more").classList.remove('hidden-text')
}

function showLess(){
    document.getElementById("readMore").innerHTML = '<a href="javascript:showMore()" class="not-tab" id="readMore">Read More</a>'
    document.getElementById("more").classList.add('hidden-text')
}

// // contact
function sendMail(){
    emailjs.send("iCloud-Charlie","template_maze", {
        "message": document.getElementById("subject").value,
        "from_name": document.getElementById("fullName").value,
        "from_email": document.getElementById("emailAddress").value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("error", error);
    });
    return false;
}

window.onload = function() {
    document.getElementById('send').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('template_maze', 'form', this);
    });
}