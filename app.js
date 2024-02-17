function sendEmail() {
  Email.send({
    SecureToken: "75ecaaee-15f0-4aec-a6e8-7187cd4585e9",
    To: 'mzaidansari712@gmail.com',
    From: 'mzaidansari712@gmail.com',
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
