const offerBtnDesktop = document.querySelector('.offer-desktop-item')
const offerBtnDesktopChangeColor = document.querySelector('.offer-color')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')
const mediaBarFB = document.querySelector('.nav__fb-space')
const mediaBarIG = document.querySelector('.nav__ig-space')
const nav = document.querySelector('.nav')
const logoDesktop = document.querySelector('.nav__logo-bg')
const burgerBTN = document.querySelector('.nav__burger-btn')
const spanBTN1 = document.querySelector('.nav__burger-btn-span1')
const spanBTN2 = document.querySelector('.nav__burger-btn-span2')
const spanBTN3 = document.querySelector('.nav__burger-btn-span3')
const mobileMenu = document.querySelector('.nav__mobile-menu-container')

//dropdown menu for "offer" item (desktop):
const showDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#d768b2'
	dropdownDesktopItem.classList.add('active')
	arrowIconDesktopMenu.classList.add('rotate')
	arrowIconDesktopMenu.classList.remove('rotate-rev')
}

const hideDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#333333'
	dropdownDesktopItem.classList.remove('active')
	arrowIconDesktopMenu.classList.remove('rotate')
	arrowIconDesktopMenu.classList.add('rotate-rev')
}

// media bar icon - changing to color:
const changeMediaIconsFB = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb-color.png')
}

const changeMediaIconsIG = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig-color.png')
}

const changeMediaIconsFBLeave = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb.png')
}

const changeMediaIconsIGLeave = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig.png')
}

// nav shadow
function addShadow() {
	if (window.scrollY >= 1) {
		nav.classList.add('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo-rev')
		logoDesktop.classList.add('resize-desktop-logo')
	} else {
		nav.classList.remove('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo')
		logoDesktop.classList.add('resize-desktop-logo-rev')
	}
}

// burger btn
const showMobileMenu = () => {
	if (!mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.add('mobile-menu-active')
		burgerBTN.classList.add('burger-btn-border')
		spanBTN1.classList.add('burger-span1')
		spanBTN2.classList.add('burger-span2')
		spanBTN3.classList.add('burger-span3')
	} else if (mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.remove('mobile-menu-active')
		burgerBTN.classList.remove('burger-btn-border')
		spanBTN1.classList.remove('burger-span1')
		spanBTN2.classList.remove('burger-span2')
		spanBTN3.classList.remove('burger-span3')
	}
}

// dropdown "offer" menu:
offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)
// media bar icon - changing to color:
mediaBarFB.addEventListener('mouseover', changeMediaIconsFB)
mediaBarIG.addEventListener('mouseover', changeMediaIconsIG)
mediaBarFB.addEventListener('mouseleave', changeMediaIconsFBLeave)
mediaBarIG.addEventListener('mouseleave', changeMediaIconsIGLeave)
// nav shadow:
window.addEventListener('scroll', addShadow)
// burger btn:
burgerBTN.addEventListener('click', showMobileMenu)
