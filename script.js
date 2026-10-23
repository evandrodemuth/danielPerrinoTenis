// ==========================================================================
// Perrino Tênis — interações
// ==========================================================================

// Número de WhatsApp do Daniel (DDI + DDD + número, só dígitos).
const WHATSAPP_NUMBER = "5511989581877";

// Link do perfil do LinkedIn do Daniel.
const LINKEDIN_URL = "https://www.linkedin.com/in/daniel-perrino-8bbb86a8/";

document.documentElement.classList.remove("no-js");

// Header muda de fundo ao rolar
const header = document.querySelector("[data-header]");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const toggle = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");

const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  navList.classList.toggle("is-open", open);
  toggle.querySelector(".sr-only").textContent = open ? "Fechar menu" : "Abrir menu";
};

toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
navList.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Animações de entrada
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Foto do Daniel: mostra o monograma enquanto assets/daniel.jpg não existir
const photo = document.querySelector("[data-photo]");
if (photo) {
  const hide = () => { photo.hidden = true; };
  if (photo.complete && photo.naturalWidth === 0) hide();
  photo.addEventListener("error", hide);
}

// Links externos configuráveis
const whatsappUrl = (text) => {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(text)}`;
};

if (WHATSAPP_NUMBER) {
  const greeting = whatsappUrl("Olá, Daniel! Vim pelo site e gostaria de saber mais sobre as aulas de tênis.");
  document.querySelectorAll("[data-whatsapp-fab], [data-whatsapp-link]").forEach((link) => {
    link.href = greeting;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

const linkedin = document.querySelector("[data-linkedin]");
if (linkedin) {
  if (LINKEDIN_URL) linkedin.href = LINKEDIN_URL;
  else linkedin.closest("li").hidden = true;
}

// Formulário -> WhatsApp
const form = document.querySelector("[data-contact-form]");
const formError = document.querySelector("[data-form-error]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get("nome").trim();
  const nomeInput = form.elements.nome;

  if (!nome) {
    formError.hidden = false;
    nomeInput.setAttribute("aria-invalid", "true");
    nomeInput.focus();
    return;
  }
  formError.hidden = true;
  nomeInput.removeAttribute("aria-invalid");

  const lines = [
    `Olá, Daniel! Meu nome é ${nome}.`,
    `Tenho interesse em: ${data.get("modalidade")}.`,
    `Meu nível: ${data.get("nivel")}.`,
  ];
  const msg = data.get("mensagem").trim();
  if (msg) lines.push(msg);

  window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
});

// Ano do rodapé
document.querySelector("[data-year]").textContent = new Date().getFullYear();
