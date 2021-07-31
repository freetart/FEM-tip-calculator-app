"use scrict";

// aos.js
import AOS from "aos";
AOS.init({ offset: 100, duration: 1000, once: true });

// dom elements
const bill = document.getElementById("bill");
const tipBtns = document.querySelectorAll(".option--btn");
const tipCustom = document.getElementById("custom");
const people = document.getElementById("people");
const errorMsg = document.querySelector(".form-control__error");
const results = document.querySelectorAll(".amount");
const resetBtn = document.querySelector("#reset");

// initial values
let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

// validation
const validateFloat = (s) => {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
};

const validateInt = (s) => {
  var rgx = /^[0-9]*$/;
  return s.match(rgx);
};

// functionality
const setBillValue = () => {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
  }

  if (!validateFloat(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }

  billValue = parseFloat(bill.value);

  calculateTip();
};

const handleClick = (event) => {
  tipBtns.forEach((btn) => {
    if (event.target.innerHTML == btn.innerHTML) {
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  //clear custom tip
  tipCustom.value = "";

  calculateTip();
};

const setTipCustomValue = () => {
  if (!validateInt(tipCustom.value)) {
    tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
  }

  tipValue = parseFloat(tipCustom.value / 100);

  if (tipCustom.value !== "") {
    calculateTip();
  }
};

const setPeopleValue = () => {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }

  peopleValue = parseFloat(people.value);

  if (peopleValue <= 0) {
    errorMsg.classList.add("show-error-msg");
    setTimeout(function () {
      errorMsg.classList.remove("show-error-msg");
    }, 3000);
  }

  calculateTip();
};

const calculateTip = () => {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    results[0].innerHTML = `$${tipAmount.toFixed(2)}`;
    results[1].innerHTML = `$${total.toFixed(2)}`;
  }

  if (bill.value === "") {
    results[0].innerHTML = `$0.00`;
    results[1].innerHTML = `$0.00`;
  }
};

const reset = () => {
  bill.value = "0.0";
  setBillValue();

  tipBtns[2].click();

  people.value = "1";
  setPeopleValue();
};

// event listeners
bill.addEventListener("input", setBillValue);
tipBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", setTipCustomValue);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", reset);
