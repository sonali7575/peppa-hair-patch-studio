// Configure the real Peppa WhatsApp number before publishing.
// Use country code + number, digits only. Example format for India: 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function updateWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const message = link.dataset.message || "Hi Peppa Hair Patch Studio, I'd like to make an enquiry.";
    link.href = whatsappUrl(message);
    link.target = "_blank";
    link.rel = "noopener";
  });
}
const serviceChoice = document.getElementById("service-choice");
const preferredTime = document.getElementById("preferred-time");
const bookingButton = document.getElementById("booking-button");
function updateBookingMessage() {
  if (!serviceChoice || !bookingButton) return;
  const time = preferredTime?.value.trim();
  const message = `Hi Peppa Hair Patch Studio, I'd like to enquire about: ${serviceChoice.value}.${time ? ` My preferred day/time is ${time}.` : ""} Please share pricing and available appointment times.`;
  bookingButton.href = whatsappUrl(message);
  bookingButton.target = "_blank";
  bookingButton.rel = "noopener";
}
serviceChoice?.addEventListener("change", updateBookingMessage);
preferredTime?.addEventListener("input", updateBookingMessage);
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
updateWhatsAppLinks();
updateBookingMessage();
