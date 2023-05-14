const offerBtnDesktop = document.querySelector('.offer-desktop-item')
const offerBtnDesktopChangeColor = document.querySelector('.offer-color')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')

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


offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)