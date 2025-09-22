//whatsapp


function sendwhatsapp() {
    var ph = "+966509411956";

    // ✅ Use getElementById() instead of querySelector('.class')
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var place = document.getElementById('place').value;
    var phone = document.getElementById('phone').value;
    var msg = document.getElementById('msg').value;

    var url = "https://wa.me/" + ph + "?text="
        + "*Name:* " + name + "%0a"
        + "*Email:* " + email + "%0a"
        + "*Place:* " + place + "%0a"
        + "*Phone:* " + phone + "%0a"
        + "*Message:* " + msg;

    window.open(url, '_blank').focus();
}

//email section

function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        place:document.getElementById("place").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    }

    emailjs.send("service_pxsx08d","template_uhx67p8",parms).then(alert("Email sent successfully"))
}