// Code to detect click of option within fly-out menu
let specifiedElement = document.querySelector('.flyout-menu');
document.addEventListener('click', function(event) {
    var isClickInside = specifiedElement.contains(event.target);
    //If link is within current web page
    if (isClickInside) {
        //Get id of anchor
        let anchor_id = window.location.hash;
        //Add extra spacing above anchor
        let elemAnchor = document.querySelector(anchor_id)
        elemAnchor.classList.add('sticky-anchor');
        //Close fly-out menu
        toggleMobileMenu();
    }
    else {
        return;
    }
});

// Code to show/hide fly-out mobile menu -->
document.querySelector('.item-icon').addEventListener('click', toggleMobileMenu)
const pageContainer = document.querySelector('.page-container');

function toggleMobileMenu() {
    //toggle hamburger icon
    const elemIcon = document.querySelector('.item-icon');
    elemIcon.classList.toggle("change");
    const elemHTML = document.querySelector('html');
    const elemBody = document.querySelector('body');            
    const elemFlyOut = document.querySelector('.flyout-menu');

    //if fly-out menu is currently closed, open it.
    if (elemIcon.classList.contains('change')) {
        elemFlyOut.classList.remove('flyout-menu-is-closed');
        elemFlyOut.classList.add('flyout-menu-is-open');
        elemHTML.classList.add('no-scroll');
        elemBody.classList.add('no-scroll');
    }    
    //if fly-out menu is currently open, close it.
    else {
        elemFlyOut.classList.remove('flyout-menu-is-open');
        elemFlyOut.classList.add('flyout-menu-is-closed');
        elemHTML.classList.remove('no-scroll');
        elemBody.classList.remove('no-scroll');                                
    }
}

jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});

