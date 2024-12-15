// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const SubmitButton = document.getElementById("submit-button");
const contactPg = document.getElementById("contact-page");

SubmitButton.addEventListener("click", message);

function message() {
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message!";
    thankYouMessage.style.fontSize = "24px";
    contactPg.className = "thank-you";
    contactPg.innerHTML = "";
    contactPg.appendChild(thankYouMessage);
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

