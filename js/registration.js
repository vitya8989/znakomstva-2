let selectMonth = document.querySelector('.registration-form__birth-month');
selectMonth.onchange = function () {
	this.style.color = '#ffffff';
}

let passwordControl = document.querySelector('.password-control');
let passwordInput = document.querySelector('.password');

passwordControl.onclick = function (event) {
	event.preventDefault();
	if (passwordInput.getAttribute("type") === "password") {
		passwordInput.setAttribute("type", "text");
	} else {
		passwordInput.setAttribute("type", "password");
	}
}

let emailInputReg = document.querySelector('.registration-form__email');
let emailBoxReg = document.querySelector('.registration-form__email-box');
let formBtnReg = document.querySelector('.registration-form__submit');

function validateEmailReg() {
	let validate = true;
	let re = /\S+@\S+\.\S+/;
	if (!re.test(emailInputReg.value)) {
		validate = false;
		emailBoxReg.classList.add('error-input');
		formBtnReg.classList.add('error-input');
	}
	return validate;
}

emailInputReg.onfocus = function () {
	emailBoxReg.classList.remove('error-input');
	formBtnReg.classList.remove('error-input');
}
;
let inputBox = document.querySelectorAll('.input-box');

for (let i = 0; i < inputBox.length; i++) {
	inputBox[i].addEventListener("focusin", () => inputBox[i].classList.add('focus'));
	inputBox[i].addEventListener("focusout", () => inputBox[i].classList.remove('focus'));
}
;