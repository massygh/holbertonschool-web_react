// src/utils.js
export function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    if (isIndex) return 'Holberton School';
    return 'Holberton School main dashboard';
  }
  