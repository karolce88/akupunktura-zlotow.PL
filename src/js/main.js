const offerBtnDesktop = document.querySelector('.offer-desktop-item')
const offerBtnDesktopChangeColor = document.querySelector('.offer-color')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')
const mediaBarFB = document.querySelector('.nav__fb-space')
const mediaBarIG = document.querySelector('.nav__ig-space')
const nav = document.querySelector('.nav')
const logoDesktop = document.querySelector('.nav__logo-bg')
const burgerBTN = document.querySelector('.nav__burger-btn')

//dropdown "offer" menu:
const showDekstopOfferMenu = () => {
	dropdownDesktopItem.classList.add('active')
	arrowIconDesktopMenu.classList.add('rotate')
	offerBtnDesktopChangeColor.style.color = '#d768b2'
}

const hideDekstopOfferMenu = () => {
	dropdownDesktopItem.classList.remove('active')
	arrowIconDesktopMenu.classList.remove('rotate')
	offerBtnDesktopChangeColor.style.color = '#333333'
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

const showMobileMenu = () => {
    
}

//dropdown "offer" menu:
offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)

// media bar icon - changing to color:
mediaBarFB.addEventListener('mouseover', changeMediaIconsFB)
mediaBarIG.addEventListener('mouseover', changeMediaIconsIG)
mediaBarFB.addEventListener('mouseleave', changeMediaIconsFBLeave)
mediaBarIG.addEventListener('mouseleave', changeMediaIconsIGLeave)

// nav shadow
window.addEventListener('scroll', addShadow)

burgerBTN.addEventListener('click', showMobileMenu)