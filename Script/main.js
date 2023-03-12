// call all inputs
const firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  submit = document.querySelector("input[type='submit']"),
  // the list of input fileds
  fileds = document.querySelectorAll("input:not([type='submit'])");
let check = 0;

// decalre the regEx pattrens
const namesEx = /[a-z]{1,}/i,
  emailEx = /\w@\w.\w/i;

// check fileds function
let checkFields = () => {
    if (!namesEx.test(firstName.value)) {
      activeInvaldeMode(firstName);
      check++;
    } else removeInvaldeMode(firstName);
    if (!namesEx.test(lastName.value)) {
      activeInvaldeMode(lastName);
      check++;
    } else removeInvaldeMode(lastName);
    if (!emailEx.test(email.value)) {
      activeInvaldeMode(email);
      check++;
    } else removeInvaldeMode(email);
    if (password.value == "") {
      activeInvaldeMode(password);
      check++;
    } else removeInvaldeMode(password);
    if (check != 0) submit.setAttribute("disabled", true);
    else submit.removeAttribute("disabled");
    check = 0;
  },
  // invalde mode function
  activeInvaldeMode = (field) => {
    field.classList.add("invalid-mode");
    field.nextElementSibling.classList.add("active");
  };

// desactive invalid mode function
function removeInvaldeMode(field) {
  field.classList.remove("invalid-mode");
  field.nextElementSibling.classList.remove("active");
  submit.removeAttribute("disabled");
  console.log("remove done from " + field.name);
}

// do the check when we click on submit input
submit.addEventListener("click", checkFields);

// remove invalid message when we focus on filed
fileds.forEach((element) => {
  element.addEventListener("focus", () => removeInvaldeMode(element));
});
