window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  let values = { amount: 400000, years: 25, rate: 5 };
    const amount = document.getElementById('loan-amount');
      amount.value = values.amount;
    const years = document.getElementById('loan-years');
      years.value = values.years;
    const rate = document.getElementById('loan-rate');
      rate.value = values.rate;
  update();
}

function update() {
  const currentValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentValues))
}

function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100 / 12);
  let N = Math.floor(values.years * 12);
  return (monthlyRate * values.amount) /
  (1 - Math.pow((1 + monthlyRate) , -N)).toFixed(2);
}

function updateMonthly(monthly) {
  let monthlyDoller = document.getElementById('monthly-payment');
  monthlyDoller.innerText = '$' + monthly;
}
