const translations = {
  en: {
    welcome: "Welcome to BiteBridge 🍴",
    tagline: "Your delicious journey starts here!",
    menuItems: ["Pizza", "Salads", "Burgers", "Noodles", "Desserts", "Beverages"],
    footer: "© 2025 BiteBridge. All rights reserved.",
    logout: "Logout",
    logoutConfirm: "Are you sure you want to logout?"
  },
  hi: {
    welcome: "बाइटब्रिज में आपका स्वागत है 🍴",
    tagline: "आपकी स्वादिष्ट यात्रा यहीं से शुरू होती है!",
    menuItems: ["पिज़्ज़ा", "सलाद", "बर्गर", "नूडल्स", "मिठाइयाँ", "पेय पदार्थ"],
    footer: "© 2025 बाइटब्रिज। सर्वाधिकार सुरक्षित।",
    logout: "लॉग आउट",
    logoutConfirm: "क्या आप वाकई लॉग आउट करना चाहते हैं?"
  },
  fr: {
    welcome: "Bienvenue chez BiteBridge 🍴",
    tagline: "Votre aventure gourmande commence ici !",
    menuItems: ["Pizza", "Salades", "Burgers", "Nouilles", "Desserts", "Boissons"],
    footer: "© 2025 BiteBridge. Tous droits réservés.",
    logout: "Se déconnecter",
    logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter ?"
  },
  es: {
    welcome: "Bienvenido a BiteBridge 🍴",
    tagline: "Tu viaje delicioso comienza aquí!",
    menuItems: ["Pizza", "Ensaladas", "Hamburguesas", "Fideos", "Postres", "Bebidas"],
    footer: "© 2025 BiteBridge. Todos los derechos reservados.",
    logout: "Cerrar sesión",
    logoutConfirm: "¿Estás seguro de que quieres cerrar sesión?"
  }
};

function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

function localizeContent() {
  const lang = getLanguage();
  const t = translations[lang];

  if (!t) return;

  document.getElementById("welcome-text").textContent = t.welcome;
  document.getElementById("tagline").textContent = t.tagline;

  const keys = ["pizza", "salads", "burgers", "noodles", "desserts", "beverages"];
  keys.forEach((key, i) => {
    const labelSpan = document.querySelector(`[data-testid="menu-${key}"] .label`);
    if (labelSpan) {
      labelSpan.textContent = t.menuItems[i];
    }
  });

  const footer = document.getElementById("footer-text");
  if (footer) footer.textContent = t.footer;

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) logoutBtn.textContent = t.logout;
}

function logout() {
  const confirmText = translations["en"].logoutConfirm || "Are you sure you want to logout?";

  if (confirm(confirmText)) {
    localStorage.removeItem("user");
    localStorage.setItem("lang", "en"); // ✅ Force English for next login
    window.location.href = "login.html";
  }
}

window.onload = localizeContent;