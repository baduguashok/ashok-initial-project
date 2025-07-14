/*vwo script starts here*/

// Get the element 
const getNumericAmount = (el) => {
  if (!el) return 0;
  const text = el.textContent.trim(); // e.g. "$160"
  const number = parseFloat(text.replace(/[^0-9.]/g, '')); // → 160
  return isNaN(number) ? 0 : number;
};

// Get DOM elements
const payment_state_fee = document.getElementById('payment_state_fees');
const standard_processing_fee = document.getElementById('standard_processing');
const expedited_processing_fee = document.getElementById('expedited_processing');

// Get numeric values
const stateAmount = getNumericAmount(payment_state_fee);
const standardAmount = getNumericAmount(standard_processing_fee);
const expeditedAmount = getNumericAmount(expedited_processing_fee);

// Add State Fee to both and update DOM
if (standard_processing_fee) {
  const newStandard = stateAmount + standardAmount;
  standard_processing_fee.textContent = `$${newStandard.toFixed(2)}`;
}

if (expedited_processing_fee) {
  const newExpedited = stateAmount + expeditedAmount;
  expedited_processing_fee.textContent = `$${newExpedited.toFixed(2)}`;
}

//hide stateSection 
const stateSection = document.getElementById('state_name_vwo');
if (stateSection) {
  stateSection.setAttribute('style', 'display: none !important;');
}