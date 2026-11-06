const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  formMessage.className = "form-message";

  if (!contactForm.checkValidity()) {
    formMessage.textContent = "Periksa kembali data. Nama, email, subjek, dan pesan wajib diisi dengan benar.";
    formMessage.classList.add("error");
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2 || message.length < 10) {
    formMessage.textContent = "Nama minimal 2 karakter dan pesan minimal 10 karakter.";
    formMessage.classList.add("error");
    return;
  }

  const body = `Nama: ${name}%0AEmail: ${email}%0A%0APesan:%0A${encodeURIComponent(message)}`;
  const mailto = `mailto:tiaraazzahra333@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  formMessage.textContent = "Data valid. Aplikasi email akan dibuka untuk mengirim pesan.";
  formMessage.classList.add("success");
  window.location.href = mailto;
});
