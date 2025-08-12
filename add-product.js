// 🌐 Centralized multilingual translations
const translations = {
  en: {
    quantityLabel: "Select quantity:",
    addToCart: "Add to Cart",
    back: "← Back to Homepage",
    logout: "Logout",
    logoutConfirm: "Are you sure you want to logout?",
    menuItems: {
      pizza: "🍕 Pizza",
      salads: "🥗 Salads",
      burgers: "🍔 Burgers",
      noodles: "🍜 Noodles",
      desserts: "🍰 Desserts",
      beverages: "🥤 Beverages"
    },
    addedMsg: {
      pizza: "Pizza added to cart!",
      salads: "Salads added to cart!",
      burgers: "Burgers added to cart!",
      noodles: "Noodles added to cart!",
      desserts: "Desserts added to cart!",
      beverages: "Beverages added to cart!"
    }
  },
  hi: {
    quantityLabel: "मात्रा चुनें:",
    addToCart: "कार्ट में जोड़ें",
    back: "← होमपेज पर वापस जाएं",
    logout: "लॉग आउट",
    logoutConfirm: "क्या आप वाकई लॉग आउट करना चाहते हैं?",
    menuItems: {
      pizza: "🍕 पिज़्ज़ा",
      salads: "🥗 सलाद",
      burgers: "🍔 बर्गर",
      noodles: "🍜 नूडल्स",
      desserts: "🍰 मिठाई",
      beverages: "🥤 पेय"
    },
    addedMsg: {
      pizza: "पिज़्ज़ा कार्ट में जोड़ा गया!",
      salads: "सलाद कार्ट में जोड़ा गया!",
      burgers: "बर्गर कार्ट में जोड़ा गया!",
      noodles: "नूडल्स कार्ट में जोड़ा गया!",
      desserts: "मिठाई कार्ट में जोड़ी गई!",
      beverages: "पेय कार्ट में जोड़ा गया!"
    }
  },
  fr: {
    quantityLabel: "Sélectionnez la quantité :",
    addToCart: "Ajouter au panier",
    back: "← Retour à la page d'accueil",
    logout: "Se déconnecter",
    logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter ?",
    menuItems: {
      pizza: "🍕 Pizza",
      salads: "🥗 Salades",
      burgers: "🍔 Burgers",
      noodles: "🍜 Nouilles",
      desserts: "🍰 Desserts",
      beverages: "🥤 Boissons"
    },
    addedMsg: {
      pizza: "Pizza ajoutée au panier !",
      salads: "Salades ajoutées au panier !",
      burgers: "Burgers ajoutés au panier !",
      noodles: "Nouilles ajoutées au panier !",
      desserts: "Desserts ajoutés au panier !",
      beverages: "Boissons ajoutées au panier !"
    }
  },
  es: {
    quantityLabel: "Selecciona la cantidad:",
    addToCart: "Agregar al carrito",
    back: "← Volver a la página principal",
    logout: "Cerrar sesión",
    logoutConfirm: "¿Estás seguro de que quieres cerrar sesión?",
    menuItems: {
      pizza: "🍕 Pizza",
      salads: "🥗 Ensaladas",
      burgers: "🍔 Hamburguesas",
      noodles: "🍜 Fideos",
      desserts: "🍰 Postres",
      beverages: "🥤 Bebidas"
    },
    addedMsg: {
      pizza: "¡Pizza agregada al carrito!",
      salads: "¡Ensaladas agregadas al carrito!",
      burgers: "¡Hamburguesas agregadas al carrito!",
      noodles: "¡Fideos agregados al carrito!",
      desserts: "¡Postres agregados al carrito!",
      beverages: "¡Bebidas agregadas al carrito!"
    }
  }
};

// 🔍 Helper to get query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 🖼️ Update UI on page load
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  const itemKey = getQueryParam("item");
  const t = translations[lang];

  // Set translated product name
  document.getElementById("product-name").textContent = t.menuItems[itemKey] || itemKey;

  // Set quantity label
  document.querySelector("p").textContent = t.quantityLabel;

  // Set button texts
  document.querySelector("button").textContent = t.addToCart;
  document.querySelector(".back-button").textContent = t.back;
  document.querySelector(".logout-button").textContent = t.logout;
});

// 🛒 Add to cart with localized alert
function addToCart() {
  const lang = localStorage.getItem("lang") || "en";
  const itemKey = getQueryParam("item");
  const message = translations[lang].addedMsg[itemKey] || "Item added to cart!";
  alert(message);
}

// 🔙 Go back to homepage
function goBack() {
  window.location.href = "homepage.html";
}

// 🔐 Logout with confirmation
function logout() {
  const lang = localStorage.getItem("lang") || "en";
  const confirmText = translations[lang].logoutConfirm;

  if (confirm(confirmText)) {
    localStorage.removeItem("user");
    localStorage.setItem("lang", "en"); // Reset to English
    window.location.href = "login.html";
  }
}