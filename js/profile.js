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

let sliderProfile = new Swiper('.slider-profile', {
	slidesPerView: 1,
	spaceBetween: 0,
	simulateTouch: false,
	allowTouchMove: false,
	navigation: {
		nextEl: '.slider-profile__btn-next',
		prevEl: '.slider-profile__btn-prev'
	},
	breakpoints: {
		768: {
			speed: 400,
			spaceBetween: 1000,
		},
	},
});

new Swiper('.slider-profile-main-photos', {
	slidesPerView: 'auto',
	spaceBetween: 5,
	nested: true,
	simulateTouch: true,
	allowTouchMove: true,
	breakpoints: {
		531: {
			allowTouchMove: true,
			simulateTouch: true,
			spaceBetween: 5,
			nested: true,
			slidesPerView: 4,
		},
		768: {
			allowTouchMove: true,
			simulateTouch: true,
			spaceBetween: 8,
			nested: true,
			slidesPerView: 4,
			grabCursor: true,
		},
	},
});

let profileNameWrapper = document.querySelectorAll('.profile-info__name-wrapper');
let profileMainPhoto = document.querySelectorAll('.profile-main-photos__main-photo');
let profileInfo = document.querySelectorAll('.profile-info');
let aboutSelf = document.querySelectorAll('.about-self');
let sliderProfileMainPhotos = document.querySelectorAll('.slider-profile-main-photos');
let profileInfoBtn = document.querySelectorAll('.profile-info__btn');
let prevBtnSlider = document.querySelector('.slider-profile__btn-prev');
let nextBtnSlider = document.querySelector('.slider-profile__btn-next');

window.addEventListener('resize', function (event) {
	for (let i = 0; i < profileNameWrapper.length; i++) {
		if (window.innerWidth < 768) {
			profileMainPhoto[i].append(profileNameWrapper[i]);
			profileInfo[i].prepend(aboutSelf[i]);
			profileInfoBtn[i].after(sliderProfileMainPhotos[i]);
			let prevBtnSliderClone = prevBtnSlider.cloneNode(true);
			let nextBtnSliderClone = nextBtnSlider.cloneNode(true);
			profileMainPhoto[i].append(prevBtnSliderClone);
			profileMainPhoto[i].append(nextBtnSliderClone);
		} else {
			profileInfo[i].prepend(profileNameWrapper[i]);
			profileInfo[i].append(aboutSelf[i]);
			profileMainPhoto[i].after(sliderProfileMainPhotos[i]);
		}
	}
	if (window.innerWidth < 768) {
		let prevBtnSlider = document.querySelectorAll('.slider-profile__btn-prev');
		let nextBtnSlider = document.querySelectorAll('.slider-profile__btn-next');
		for (let i = 0; i < prevBtnSlider.length; i++) {
			prevBtnSlider[i].classList.remove('swiper-button-disabled');
			prevBtnSlider[i].onclick = function () {
				sliderProfile.slidePrev();
			}
			nextBtnSlider[i].onclick = function () {
				sliderProfile.slideNext();
			}
		}
	}
});

for (let i = 0; i < profileNameWrapper.length; i++) {
	if (window.innerWidth < 768) {
		profileMainPhoto[i].append(profileNameWrapper[i]);
		profileInfo[i].prepend(aboutSelf[i]);
		profileInfoBtn[i].after(sliderProfileMainPhotos[i]);
		let prevBtnSliderClone = prevBtnSlider.cloneNode(true);
		let nextBtnSliderClone = nextBtnSlider.cloneNode(true);
		profileMainPhoto[i].append(prevBtnSliderClone);
		profileMainPhoto[i].append(nextBtnSliderClone);
	}
}
if (window.innerWidth < 768) {
	let prevBtnSlider = document.querySelectorAll('.slider-profile__btn-prev');
	let nextBtnSlider = document.querySelectorAll('.slider-profile__btn-next');
	for (let i = 0; i < prevBtnSlider.length; i++) {
		prevBtnSlider[i].classList.remove('swiper-button-disabled');
		prevBtnSlider[i].onclick = function () {
			sliderProfile.slidePrev();
		}
		nextBtnSlider[i].onclick = function () {
			sliderProfile.slideNext();
		}
	}
}

let profileSlide = document.querySelectorAll('.profile-slide');
for (let i = 0; i < profileSlide.length; i++) {
	let profileMainPhotosImg = profileSlide[i].querySelectorAll('.profile-main-photos__img');
	let profileMainPhotosSlidePhotoMini = profileSlide[i].querySelectorAll('.profile-main-photos-slide__photo');
	for (let j = 0; j < profileMainPhotosImg.length; j++) {
		profileMainPhotosSlidePhotoMini[j].onclick = function () {
			for (let k = 0; k < profileMainPhotosImg.length; k++) {
				profileMainPhotosImg[k].classList.remove('active-photo');
			}
			profileMainPhotosImg[j].classList.add('active-photo');
		}
	}
}