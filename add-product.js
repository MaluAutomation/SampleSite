const translations = {
  en: {
    productName: "🍕 Pizza",
    quantityLabel: "Select quantity:",
    addToCart: "Add to Cart",
    back: "← Back to Homepage",
    logout: "Logout",
    addedMsg: "Pizza added to cart!",
    logoutConfirm: "Are you sure you want to logout?"
  },
  hi: {
    productName: "🍕 पिज़्ज़ा",
    quantityLabel: "मात्रा चुनें:",
    addToCart: "कार्ट में जोड़ें",
    back: "← होमपेज पर वापस जाएं",
    logout: "लॉग आउट",
    addedMsg: "पिज़्ज़ा कार्ट में जोड़ा गया!",
    logoutConfirm: "क्या आप वाकई लॉग आउट करना चाहते हैं?"
  },
  fr: {
    productName: "🍕 Pizza",
    quantityLabel: "Sélectionnez la quantité :",
    addToCart: "Ajouter au panier",
    back: "← Retour à la page d'accueil",
    logout: "Se déconnecter",
    addedMsg: "Pizza ajoutée au panier !",
    logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter ?"
  },
  es: {
    productName: "🍕 Pizza",
    quantityLabel: "Selecciona la cantidad:",
    addToCart: "Agregar al carrito",
    back: "← Volver a la página principal",
    logout: "Cerrar sesión",
    addedMsg: "¡Pizza agregada al carrito!",
    logoutConfirm: "¿Estás seguro de que quieres cerrar sesión?"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

  document.getElementById("product-name").textContent = t.productName;
  document.querySelector("p").textContent = t.quantityLabel;
  document.querySelector("button").textContent = t.addToCart;
  document.querySelector(".back-button").textContent = t.back;
  document.querySelector(".logout-button").textContent = t.logout;
});

function addToCart() {
  const lang = localStorage.getItem("lang") || "en";
  alert(translations[lang].addedMsg);
}

function goBack() {
  window.location.href = "homepage.html";
}

function logout() {
  const lang = localStorage.getItem("lang") || "en";
  const confirmText = translations[lang].logoutConfirm;

  if (confirm(confirmText)) {
    localStorage.removeItem("user");
    localStorage.setItem("lang", "en"); // Reset to English

    window.location.href = "login.html";
  }
}