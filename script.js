
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      const result = document.getElementById("formMessage");

      if (!name || !email || !subject || !message) {
        result.textContent = "Please complete all required fields.";
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email address.";
        return;
      }

      const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message;

      result.textContent =
        "Your message is ready. Please use the contact number to reach our team.";

      console.log(body);
    });
  }

});
