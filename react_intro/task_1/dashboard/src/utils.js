// src/utils.js

// Retourne l'année courante
export function getCurrentYear() {
  return new Date().getFullYear();
}

// Retourne le texte du footer selon isIndex
export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}
