document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous feedback
    feedback.classList.add("d-none");
    feedback.classList.remove("alert-success", "alert-danger");

    // Validate form inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Message validation
    if (!message.value.trim()) {
      message.classList.add("is-invalid");
      isValid = false;
    } else {
      message.classList.remove("is-invalid");
    }

    if (!isValid) return;

    // Send data to the server
    try {
      const response = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        feedback.textContent = "Thank you for reaching out! We'll get back to you soon.";
        feedback.classList.add("alert-success", "d-block");
        form.reset();
      } else {
        throw new Error("Failed to submit form.");
      }
    } catch (error) {
      feedback.textContent = "Something went wrong. Please try again later.";
      feedback.classList.add("alert-danger", "d-block");
    }
  });
});
