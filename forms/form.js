function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "devu1011depu@gmail.com",
        Password : "6CF852D1989EF2A8FDAFB01A6437BFBA13B8",
        To : 'devu1011depu@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}