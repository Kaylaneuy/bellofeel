function applyPhoneMask(input) {
    let value = input.value.replace(/\D/g, ''); // Remove non-digit characters
    let formattedValue = '';
  
    if (value.length > 0) {
      formattedValue += '(' + value.substring(0, 2); // Add DDD
    }
    if (value.length > 2) {
      formattedValue += ') ' + value.substring(2, 3); // Add 9
    }
    if (value.length > 3) {
      formattedValue += value.substring(3, 7); // Add first part of the number
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 11); // Add second part of the number
    }
  
    input.value = formattedValue;
  }
  
  const phoneInput = document.querySelector('input#telefone');
  phoneInput.addEventListener('input', () => applyPhoneMask(phoneInput));
  
  const phoneInput2 = document.querySelector('input#telefone2');
  phoneInput2.addEventListener('input', () => applyPhoneMask(phoneInput2));