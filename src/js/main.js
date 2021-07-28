"use scrict";

const billEl = document.querySelector("#bill");
const peopleEl = document.querySelector("#people");
const tipButtons = document.querySelectorAll(".option--btn");
const customEl = document.querySelector("#custom");
const totalTipEl = document.querySelector("#amount-tip");
const totalPersonEl = document.querySelector("#amount-person");
const calculateBtn = document.querySelector("#calculate");
const resetBtn = document.querySelector("#reset");

const billAmount = billEl.value.trim();
const peopleAmount = peopleEl.value.trim();
let totalPerPerson = billAmount / peopleAmount;

const calculateTotalPerPerson = () => {
  totalPerPerson = Math.round(totalPerPerson * 100) / 100;
  totalPerPerson = totalPerPerson.toFixed(2);

  if (billAmount && peopleAmount) {
    totalPersonEl.innerText = `$${totalPerPerson}`;
  } else {
    totalPersonEl.innerText = `$0.00`;
  }
};

const resetInputs = () => {
  billEl.value = null;
  peopleEl.value = null;
  customEl.value = null;
  totalTipEl.innerText = "$0.00";
  totalPersonEl.innerText = "$0.00";
};

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    console.log(value);
  });
});

customEl.addEventListener("input", () => {
  const custom = customEl.value;
  console.log(custom);
});

calculateBtn.addEventListener("click", () => {
  calculateTotalPerPerson();
});

resetBtn.addEventListener("click", () => {
  resetInputs();
});
