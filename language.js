const translations = {
  en: {
    title: 'Welcome to BiteBridge',
    username: 'Username',
    password: 'Password',
    submit: 'Submit'
  },
  es: {
    title: 'Bienvenido a BiteBridg',
    username: 'Usuario',
    password: 'Contraseña',
    submit: 'Enviar'
  },
  fr: {
    title: 'Bienvenue chez BiteBridge',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    submit: 'Valider'
  },
  hi: {
    title: 'बाइटब्रिज में आपका स्वागत है',
    username: 'उपयोगकर्ता नाम',
    password: 'पासवर्ड',
    submit: 'सबमिट करें'
  }
};

function changeLanguage() {
  const lang = document.getElementById('language-select').value;
  const t = translations[lang];
  document.getElementById('title').textContent = t.title;
  document.getElementById('label-username').textContent = t.username;
  document.getElementById('label-password').textContent = t.password;
  document.getElementById('submit-button').textContent = t.submit;
}

function submitForm() {
  alert('Form submitted!');
 
}