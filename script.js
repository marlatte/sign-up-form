let form = document.querySelector("form");
let submitButton = document.querySelector("button.sign-up");
let firstName = document.querySelector("#first-name");
let email = document.querySelector("#email");
let password = document.querySelector("#pwd-1");
let passwordConfirm = document.querySelector("#pwd-2");

form.addEventListener("mouseover", validateForms);
submitButton.addEventListener("mouseover", validateForms);

function validateForms() {
	if (firstName.required === false) {
		firstName.required = true;
		email.required = true;
		password.required = true;
		passwordConfirm.required = true;
		submitButton.type = "submit";
	}
}

password.addEventListener("blur", checkPwdMatch);
passwordConfirm.addEventListener("blur", checkPwdMatch);

function checkPwdMatch() {
 if (password.value === passwordConfirm.value) {
	passwordConfirm.setCustomValidity("");
} else {
	passwordConfirm.setCustomValidity("Passwords do not match.")
 }
}