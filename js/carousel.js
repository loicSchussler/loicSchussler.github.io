let imgLinks = ["https://i.ibb.co/W2SSGCK/illustration-ocr-1.png","https://i.ibb.co/Rj1yYhX/illustration-f1.png","https://i.ibb.co/Q8VvSWT/illustration-linkedin.png"];
let htmlLinks = ["C:\\Users\\schus\\FrontEnd-CA\\html\\page-2.html","C:\\Users\\schus\\FrontEnd-CA\\html\\page-3.html","C:\\Users\\schus\\FrontEnd-CA\\html\\page-4.html"];

let iCarousel = 0;
let countCarousel = imgLinks.length;

let carousel = document.getElementById("carousel");

let buttonLCarousel = document.getElementById("buttonLCarousel");
let buttonRCarousel = document.getElementById("buttonRCarousel");

carousel.innerHTML = "<a href=\""+htmlLinks[iCarousel]+"\"><img src=\""+imgLinks[iCarousel]+"\"></a>";

buttonLCarousel.addEventListener('click', () => {
    carouselSwitch(-1)
})
buttonRCarousel.addEventListener('click', () => {
    carouselSwitch(1)
})

function Actualise()
{
    carousel.innerHTML = "<a href=\""+htmlLinks[iCarousel]+"\"><img src=\""+imgLinks[iCarousel]+"\"></a>";
}

function carouselSwitch(direction)
{
    iCarousel = addMod(countCarousel,iCarousel,direction);
    Actualise();
}

function addMod(le,i,x)
{
    if (((i+x)%le) >= 0)
        return (i+x)%le;
    return le + (i+x)%le;
}