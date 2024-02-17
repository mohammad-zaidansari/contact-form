function sendEmail() {
  Email.send({
    SecureToken: "Enter your tocken number",
    To: 'enter your email',
    From: 'enter your email',
    Subject: "This is the subject",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> Phone:" +
      document.getElementById("phone").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Successfully"));
};
