const firstName = document.querySelector('#nameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const postal = document.querySelector('#postalInput');
const number = document.querySelector('#numberInput');

const creditCard = document.querySelector('#creditCardInput');
const ccv = document.querySelector('#ccvInput');
const expirationDate = document.querySelector('#expirationInput');

const validationMessageError = document.querySelector('#validationMessageError');
const validationMessageSuccess = document.querySelector('#validationMessageSuccess');

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', validate);

/**
 * Adds validation error style to parent element
 * @param {object} el
 */
function applyValidationErrorStyleToParent(el) {
  el.parentElement.classList.add('validationError');
}

/**
 * Removes validation error style to parent element
 * @param {object} el
 */
function removeValidationErrorStyleFromParent(el) {
  el.parentElement.classList.remove('validationError');
}

/**
 * Validation logic
 */
function validate() {
  let validated = true;

  if (firstName.value.length === 0) {
    applyValidationErrorStyleToParent(firstName);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(firstName);
  }

  if (lastName.value.length === 0) {
    applyValidationErrorStyleToParent(lastName);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(lastName);
  }

  if (email.value.length === 0 ||
     !email.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
    applyValidationErrorStyleToParent(email);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(email);
  }

  if (postal.value.length === 0) {
    applyValidationErrorStyleToParent(postal);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(postal);
  }

  if (number.value.length === 0 ||
    !number.value.match(/^[0-9 | \s | \( | \) | /+]*$/)) {
    applyValidationErrorStyleToParent(number);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(number);
  }

  if (creditCard.value.length === 0
    || !creditCard.value.match(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/)) {
    applyValidationErrorStyleToParent(creditCard.parentElement);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(creditCard.parentElement);
  }

  if (ccv.value.length !== 3) {
    applyValidationErrorStyleToParent(ccv.parentElement);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(ccv.parentElement);
  }

  if (expirationDate.value.length === 0
    || !expirationDate.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
    applyValidationErrorStyleToParent(expirationDate);
    validated = false;
  } else {
    removeValidationErrorStyleFromParent(expirationDate);
  }

  if (!validated) {
    validationMessageError.classList.remove('validationMessageHide');
    validationMessageSuccess.classList.add('validationMessageHide');
  } else {
    validationMessageError.classList.add('validationMessageHide');
    validationMessageSuccess.classList.remove('validationMessageHide');
  }
}
