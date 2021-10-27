let inputBox = document.querySelectorAll('.input-box');

for (let i = 0; i < inputBox.length; i++) {
	inputBox[i].addEventListener("focusin", () => inputBox[i].classList.add('focus'));
	inputBox[i].addEventListener("focusout", () => inputBox[i].classList.remove('focus'));
}
;
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

let emailInputAuth = document.querySelector('.authorization-form__email');
let emailBoxAuth = document.querySelector('.authorization-form__email-box');
let formBtnAuth = document.querySelector('.authorization-form__submit');

function validateEmailAuth(event) {
	event.preventDefault();
	let validate = true;
	let re = /\S+@\S+\.\S+/;
	if (!re.test(emailInputAuth.value)) {
		validate = false;
		emailBoxAuth.classList.add('error-input');
		formBtnAuth.classList.add('error-input');
	} else {
		let url = window.location;
		url.replace(`${url}main.html`); //переход на main.html
	}
	return validate;
}

emailInputAuth.onfocus = function () {
	emailBoxAuth.classList.remove('error-input');
	formBtnAuth.classList.remove('error-input');
}
;
let emailInputForgot = document.querySelector('.forgot-form__email');
let emailBoxForgot = document.querySelector('.forgot-form__email-box');
let formBtnForgot = document.querySelector('.forgot-form__submit');

function validateEmailForgot(event) {
	event.preventDefault();
	let validate = true;
	let re = /\S+@\S+\.\S+/;
	if (!re.test(emailInputForgot.value)) {
		validate = false;
		emailBoxForgot.classList.add('error-input');
		formBtnForgot.classList.add('error-input');
	}
	return validate;
}

emailInputForgot.onfocus = function () {
	emailBoxForgot.classList.remove('error-input');
	formBtnForgot.classList.remove('error-input');
}

let forgotPopup = document.querySelector('.forgot-popup');
let forgotPopupBody = document.querySelector('.forgot-popup__body');
let forgotPopupOpenBtn = document.querySelector('.forgot-popup-open');

forgotPopupOpenBtn.onclick = function (event) {
	event.preventDefault();
	forgotPopup.classList.add('popup-open');
	document.body.classList.add('scroll-lock');
}

forgotPopup.onclick = function (event) {
	if (!event.target.closest('.forgot-popup__body')) {
		forgotPopup.classList.remove('popup-open');
		document.body.classList.remove('scroll-lock');
	}
};
