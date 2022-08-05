// Getting Nav Menu Button and Nav
const navMenuBtn = document.querySelector(`.header__menu`);
const nav = document.querySelector(`.header__nav`);

let navChecker = false;

// Adding EventListener to the Nav Btn
navMenuBtn.addEventListener(`click`, function (e) {
    let menuIcon = navMenuBtn.querySelector(`img`);
    if (!navChecker) {
        menuIcon.setAttribute(`src`, `./images/icon-close-menu.svg`);
        nav.classList.add(`show`);
        navChecker = true;
        return;
    } else {
        menuIcon.setAttribute(`src`, `./images/icon-menu.svg`);
        nav.classList.remove(`show`);
        navChecker = false;
        return;
    }
})