const img = document.getElementById('MainLogo_img');

img.addEventListener("click", menuOpen)


let menuContainer = document.getElementById('menuContainer_div');

let styleMenuContainer = getComputedStyle(menuContainer)




function menuOpen(event){

    let visibleProperty = styleMenuContainer.visibility;

    if(visibleProperty == 'hidden'){
        menuContainer.style.visibility = 'visible';
    }
    else if(visibleProperty == 'visible')
    {
        menuContainer.style.visibility = 'hidden';
    }
    
    
    
    
}



