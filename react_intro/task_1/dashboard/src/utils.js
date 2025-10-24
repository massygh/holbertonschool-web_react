// src/utils.js

/**
 * Returns the current year as a number
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Returns the footer text depending on the isIndex boolean
 * @param {boolean} isIndex
 * @returns {string}
 */
export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}
