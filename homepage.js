const translations = {
  en: {
    welcome: "Welcome to BiteBridge 🍴",
    tagline: "Your delicious journey starts here!",
    menuItems: ["🍕 Pizza", "🥗 Salads", "🍔 Burgers", "🍜 Noodles", "🍰 Desserts", "🥤 Beverages"],
    footer: "© 2025 BiteBridge. All rights reserved."
  },
  hi: {
    welcome: "बाइटब्रिज में आपका स्वागत है 🍴",
    tagline: "आपकी स्वादिष्ट यात्रा यहीं से शुरू होती है!",
    menuItems: ["🍕 पिज़्ज़ा", "🥗 सलाद", "🍔 बर्गर", "🍜 नूडल्स", "🍰 मिठाइयाँ", "🥤 पेय पदार्थ"],
    footer: "© 2025 बाइटब्रिज। सर्वाधिकार सुरक्षित।"
  },
  fr: {
    welcome: "Bienvenue chez BiteBridge 🍴",
    tagline: "Votre aventure gourmande commence ici !",
    menuItems: ["🍕 Pizza", "🥗 Salades", "🍔 Burgers", "🍜 Nouilles", "🍰 Desserts", "🥤 Boissons"],
    footer: "© 2025 BiteBridge. Tous droits réservés."
  },
  es: {
    welcome: "Bienvenido a BiteBridge 🍴",
    tagline: "Tu viaje delicioso comienza aquí!",
    menuItems: ["🍕 Pizza", "🥗 Ensaladas", "🍔 Hamburguesas", "🍜 Fideos", "🍰 Postres", "🥤 Bebidas"],
    footer: "© 2025 BiteBridge. Todos los derechos reservados."
  }
};

function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "en";
}

function localizeContent() {
  const lang = getLanguageFromURL();
  const t = translations[lang];

  if (!t) return; // fallback if language is missing

  // Replace text content
  document.getElementById("welcome-text").textContent = t.welcome;
  document.getElementById("tagline").textContent = t.tagline;

  const items = document.getElementsByClassName("menu-item");
  for (let i = 0; i < items.length; i++) {
    items[i].querySelector("h2").textContent = t.menuItems[i];
  }

  document.getElementById("footer-text").textContent = t.footer;
}
function logout() {
 
  localStorage.removeItem('user'); 
  window.location.href = 'login.html'; 
}

window.onload = localizeContent;