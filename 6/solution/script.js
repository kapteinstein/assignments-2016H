// get elements from HTML
const form = document.getElementById('superForm');
const tax = document.getElementById('tax');
const income = document.getElementById('income');
const wealth = document.getElementById('wealth');

// set initial tax = 0
tax.setAttribute('value', 0)

function updateTax() {
  // update tax
  let amountOfTax = 0;
  amountOfTax = 0.35*income.value + 0.25*wealth.value;
  tax.setAttribute('value', amountOfTax);
}

// add event listeners
income.addEventListener('input', updateTax);
wealth.addEventListener('input', updateTax);

