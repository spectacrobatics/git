let burgerMenu;
function burger(){
    if(burgerMenu){
        disable();
        burgerMenu = false;
    }
    else{
        activate();
        burgerMenu=true;
    }
}

function disable (){
    document.getElementById("line-head").style.display = "none";
    document.getElementById("mobile-menu").style.display = "none";
    
}

function activate (){
    document.getElementById("line-head").style.display = "block";
    document.getElementById("mobile-menu").style.display = "block";
}