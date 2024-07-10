let demo;
function demoFormEn() {
    demo = document.querySelector(".demo_back");    
    demo.classList.add('demo__slow');
}

function demoFormDis() {
    demo = document.querySelector(".demo_back");
    demo.classList.remove('demo__slow');
}
function disableDemo(event){
    let tempDemo = document.querySelector(".demo_form");    
    if(!tempDemo.contains(event.target))
    demoFormDis();
}
document.addEventListener("mouseup", disableDemo);