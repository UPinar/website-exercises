var img = document.getElementById('logo-image')

var menuLink = document.getElementById('menuLink')

var headerContainer = document.getElementById('headerDivId');

var logoContainer = document.getElementById('logoDivId')

var imageContainer =document.getElementById('imageDivId')

var menuContainer = document.getElementById('menuDivId')

img.addEventListener("click",changeScreen);

function changeScreen(e){
    
    headerContainer.style.height = '100%'
    logoContainer.style.justifyContent='center'
    imageContainer.style.display = 'flex'
    imageContainer.style.height = '30rem';
    imageContainer.style.width = '30rem';
    
    // img.style.width= '250px'
    img.style.opacity = '1'
    img.style.cursor = 'default'

    menuLink.style.opacity = '1'
    menuLink.style.display='block'
    menuContainer.style.display ='grid'
}

