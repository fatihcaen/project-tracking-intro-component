$(document).ready(function () {
    let x = screen.width;
    let navbarToggle = document.querySelector('.navbar-toggle')
    let navItems = document.querySelector('.nav-items');
    let navOpen = false;

    if (x <= 768) {
        navItems.style.visibility = 'hidden';
        $(navbarToggle).click(function () {
            if (navOpen == false) {
                navOpen = true;
                navItems.style.visibility = 'visible';
                navbarToggle.innerHTML = '<img src="images/icon-close.svg">';
            } else {
                navOpen = false;
                navItems.style.visibility = 'hidden';
                navbarToggle.innerHTML = '<img src="images/icon-hamburger.svg">';
            }
        });
    } else {
        navbarToggle.style.visibility = 'hidden';
    }

});