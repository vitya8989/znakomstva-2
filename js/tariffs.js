let navLink = document.querySelectorAll('.nav__link');
let messagesPopup = document.querySelector('.chat');
let messagesPopupBody = document.querySelector('.chat__body');
let messagesPopupOpenBtn = document.querySelectorAll('.open-messages');

for (let i = 0; i < navLink.length; i++) {
	if (navLink[i].href == window.location.href) {
		navLink[i].classList.add('disabled-link');
		navLink[i].parentNode.classList.add('active-nav-item');
	}
	navLink[i].addEventListener('click', function (event) {
		for (let j = 0; j < navBurger.length; j++) {
			navBurger[j].classList.remove('burger-open');
			navContent[j].classList.remove('nav_mobile-open');
		}
		document.body.classList.remove('scroll-lock');
	});
}

let navBurger = document.querySelectorAll('.header-nav__burger');
let navContent = document.querySelectorAll('.nav');
for (let i = 0; i < navBurger.length; i++) {
	navBurger[i].onclick = function () {
		navBurger[i].classList.toggle('burger-open');
		navContent[i].classList.toggle('nav_mobile-open');
		document.body.classList.toggle('scroll-lock');
	}
}
if (window.innerWidth < 768) {
	for (let i = 0; i < messagesPopupOpenBtn.length; i++) {
		messagesPopupOpenBtn[i].onclick = function (event) {
			event.preventDefault();
			messagesPopup.classList.add('popup-open');
			for (let j = 0; j < messagesPopupOpenBtn.length; j++) {
				messagesPopupOpenBtn[j].classList.add('disabled-link');
			}
			for (let k = 0; k < navBurger.length; k++) {
				navBurger[k].classList.remove('burger-open');
				navContent[k].classList.remove('nav_mobile-open');
			}
			for (let f = 0; f < navLink.length; f++) {
				if (navLink[f].href == window.location.href) {
					navLink[f].classList.remove('disabled-link');
				}
			}
		}
	}
}
if (window.innerWidth > 767) {
	messagesPopup.onclick = function (event) {
		if (!event.target.closest('.chat__body')) {
			messagesPopup.classList.remove('popup-open');
			document.body.classList.remove('scroll-lock');
		}
	}
	for (let i = 0; i < messagesPopupOpenBtn.length; i++) {
		messagesPopupOpenBtn[i].onclick = function (event) {
			event.preventDefault();
			messagesPopup.classList.add('popup-open');
			for (let j = 0; j < navBurger.length; j++) {
				navBurger[j].classList.remove('burger-open');
				navContent[j].classList.remove('nav_mobile-open');
			}
		}
	}
}

;
let inputBox = document.querySelectorAll('.input-box');

for (let i = 0; i < inputBox.length; i++) {
	inputBox[i].addEventListener("focusin", () => inputBox[i].classList.add('focus'));
	inputBox[i].addEventListener("focusout", () => inputBox[i].classList.remove('focus'));
}
;
let chatUsersWrapper = document.querySelector('.chat-users__wrapper');
let chatUser = document.querySelectorAll('.chat-user');
let chatUsers = document.querySelector('.chat-users');
let chatMessages = document.querySelector('.chat-messages');
let toChatUsers = document.querySelector('.to-chat-users');

chatUsersWrapper.onclick = function (event) {
	for (let i = 0; i < chatUsersWrapper.children.length; i++) {
		chatUsersWrapper.children[i].classList.remove('active-chat-user');
	}
	event.target.closest('.chat-user').classList.add('active-chat-user');
}

if (window.innerWidth < 768) {
	for (let i = 0; i < chatUsersWrapper.children.length; i++) {
		chatUsersWrapper.children[i].classList.remove('active-chat-user');
	}
	chatUsersWrapper.onclick = function (event) {
		event.preventDefault();
	}
	for (let i = 0; i < chatUser.length; i++) {
		chatUser[i].onclick = function () {
			chatMessages.classList.add('open-messages');
			chatUsers.classList.add('open-messages');
		}
	}
	toChatUsers.onclick = function () {
		chatMessages.classList.remove('open-messages');
		chatUsers.classList.remove('open-messages');
	}
}

const tx = document.querySelector(".chat-messages__input");

tx.setAttribute("style", "height: 23px; overflow-y:hidden;");
tx.addEventListener("input", OnInput, false);

function OnInput() {
	this.style.height = "auto";
	this.style.height = (this.scrollHeight) + "px";
	if (this.scrollHeight >= 72) {
		this.setAttribute("style", "overflow-y:auto;");
		this.style.height = "72px";
	}
	if (this.scrollHeight == 23) {
		this.setAttribute("style", "overflow-y:hidden;");
	}
}


;

let tariffsRow = document.querySelector('.tariffs__row');
let tariffItemBtn = document.querySelectorAll('.tariffs-item__btn');

tariffsRow.onclick = function (event) {
	for (let i = 0; i < tariffsRow.children.length; i++) {
		tariffsRow.children[i].classList.remove('active-tariff');
	}
	event.target.closest('.tariffs-item').classList.add('active-tariff');
	for (let i = 0; i < tariffItemBtn.length; i++) {
		if (tariffItemBtn[i].parentNode.parentNode.classList.contains('active-tariff')) {
			tariffItemBtn[i].classList.add('b-orange');
			tariffItemBtn[i].classList.add('rot-360');
		} else {
			tariffItemBtn[i].classList.remove('b-orange');
			tariffItemBtn[i].classList.remove('rot-360');
		}
	}
}