const offerBtnDesktop = document.querySelector('.offer-show-list')
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
const logo = document.querySelector('.nav__logo-bg')
const showMobileMenuByOfferClick = document.querySelector('.mobile-menu-offer-item')
const showedMobileMenuByOfferClick = document.querySelector('.nav__mobile-menu-container-offer-submenu')
const submenuULitems1 = document.querySelector('.submenu-LI-link1')
const submenuULitems2 = document.querySelector('.submenu-LI-link2')
const submenuULitems3 = document.querySelector('.submenu-LI-link3')
const submenuULitems4 = document.querySelector('.submenu-LI-link4')
const submenuULitems5 = document.querySelector('.submenu-LI-link5')
const submenuULitems6 = document.querySelector('.submenu-LI-link6')
const submenuULitems7 = document.querySelector('.submenu-LI-link7')
const submenuULitems8 = document.querySelector('.submenu-LI-link8')
const submenuBackBtn = document.querySelector('.nav__mobile-menu-items-back-btn')
const mediaBar = document.querySelector('.nav__media-bar')
const accordionAll = document.querySelectorAll('.aboutme__accordion')
const arrowOfferClick = document.querySelector('.offer__indications-items-border-bottom-two-arrow')
const offerIndicationInfo = document.querySelector('.offer__indications-who')
const FaqAll = document.querySelectorAll('.faq__faq-box')
const footerYear = document.querySelector('.footer-year')
const cookieBox = document.querySelector('.cookies__cookie-box')
const cookieBtn = document.querySelector('.cookies__cookie-btn')



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
	if (window.scrollY < 1) {
		nav.classList.remove('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo')
		logoDesktop.classList.add('resize-desktop-logo-rev')
	} else {
		nav.classList.add('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo-rev')
		logoDesktop.classList.add('resize-desktop-logo')
	}
	
	if (window.scrollY > 500) {
		mediaBar.classList.remove('remove-media-bar-rev')
		mediaBar.classList.add('remove-media-bar')
	} else {
		mediaBar.classList.remove('remove-media-bar')
		mediaBar.classList.add('remove-media-bar-rev')
	}

}

const closeMobileMenu = () => {
    mobileMenu.classList.remove('mobile-menu-active')
    burgerBTN.classList.remove('burger-btn-border')
    spanBTN1.classList.remove('burger-span1')
    spanBTN2.classList.remove('burger-span2')
    spanBTN3.classList.remove('burger-span3')
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const closeMobileMenuByClickElements = () => {
    const mobileMenuLinks1 = document.querySelector('.mobile-nav-links1')
    const mobileMenuLinks2 = document.querySelector('.mobile-nav-links2')
    const mobileMenuLinks3 = document.querySelector('.mobile-nav-links3')
    const mobileMenuLinks4 = document.querySelector('.mobile-nav-links4')
    const mobileMenuLinks5 = document.querySelector('.mobile-nav-links5')
    const mobileMenuLinks6 = document.querySelector('.mobile-nav-links6')
    mobileMenuLinks1.addEventListener('click', showMobileMenu)
    mobileMenuLinks2.addEventListener('click', showMobileMenu)
    mobileMenuLinks3.addEventListener('click', showMobileMenu)
    mobileMenuLinks4.addEventListener('click', showMobileMenu)
    mobileMenuLinks5.addEventListener('click', showMobileMenu)
    mobileMenuLinks6.addEventListener('click', showMobileMenu)
}

const closeSubmenuOffer = () => {
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const showOfferSubmenu = () => {
    if (!showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.add('mobile-menu-active')
        submenuULitems1.addEventListener('click', showMobileMenu)
        submenuULitems2.addEventListener('click', showMobileMenu)
        submenuULitems3.addEventListener('click', showMobileMenu)
        submenuULitems4.addEventListener('click', showMobileMenu)
        submenuULitems5.addEventListener('click', showMobileMenu)
        submenuULitems6.addEventListener('click', showMobileMenu)
        submenuULitems7.addEventListener('click', showMobileMenu)
        submenuULitems8.addEventListener('click', showMobileMenu)
        submenuBackBtn.addEventListener('click', closeSubmenuOffer)
    } else if ( showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
    }

   
}

const showMobileMenu = () => {
	if (!mobileMenu.classList.contains('mobile-menu-active')) {
        closeMobileMenuByClickElements()
		logo.addEventListener('click', closeMobileMenu)
        showMobileMenuByOfferClick.addEventListener('click', showOfferSubmenu)
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
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
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

// nav shadow & media bar:
window.addEventListener('scroll', addShadow)

// burger btn:
burgerBTN.addEventListener('click', showMobileMenu)

// aboutme / education:
const showAndHideFAQeducation = (e) => {
	if (!e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.remove('rotate-rev-icon-aboutme')
		e.target.nextElementSibling.classList.remove('hide-panel')
		e.target.nextElementSibling.classList.add('show-panel')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.add('rotate-icon-aboutme')
	} else if (e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.nextElementSibling.classList.add('hide-panel')
		e.target.nextElementSibling.classList.remove('show-panel')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.remove('rotate-icon-aboutme')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.add('rotate-rev-icon-aboutme')
	}
}

accordionAll.forEach(listen => listen.addEventListener('click', showAndHideFAQeducation))

// offer section:


const ShowSickList = () => {
	if (!arrowOfferClick.classList.contains('rotate-offer-indication')) {
		arrowOfferClick.classList.add('rotate-offer-indication')
		offerIndicationInfo.classList.add('show-offer-indication')
		arrowOfferClick.classList.remove('rotate-rev-offer-indication')
		offerIndicationInfo.classList.remove('close-offer-indication')
	} else if (arrowOfferClick.classList.contains('rotate-offer-indication')) {
		arrowOfferClick.classList.add('rotate-rev-offer-indication')
		offerIndicationInfo.classList.add('close-offer-indication')
		arrowOfferClick.classList.remove('rotate-offer-indication')
		offerIndicationInfo.classList.remove('show-offer-indication')
	}
}

arrowOfferClick.addEventListener('click', ShowSickList)


// FAQ

const showFaqInfo = (e) => {
	if (!e.target.nextElementSibling.classList.contains('show-panel-faq')) {
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.remove('rotate-rev-icon-faq')
		e.target.nextElementSibling.classList.remove('hide-panel-faq')
		e.target.nextElementSibling.classList.add('show-panel-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.add('rotate-icon-faq')
	} else if (e.target.nextElementSibling.classList.contains('show-panel-faq')) {
		e.target.nextElementSibling.classList.add('hide-panel-faq')
		e.target.nextElementSibling.classList.remove('show-panel-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.remove('rotate-icon-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.add('rotate-rev-icon-faq')
	}
}

FaqAll.forEach(listen => listen.addEventListener('click', showFaqInfo))


// Footer - year
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();


// HANDLE COOKIES:

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	
	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()




/* SECTION "OPINION" SLIDER: */ 



/* END -  SECTION "OPINION" SLIDER */ 

