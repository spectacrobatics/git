let temp = false;
let fixed_head;
let info;
let prevOffset = 0;
let height;
let pageSet;
window.onscroll = function FixedHeader() {
    if (window.screen.width > 1000) {
        if (temp == false) {
            temp = true;
            height = document.querySelector('.head').offsetHeight;
            let header = document.getElementById('head-fixed');
            fixed_head = header.cloneNode(true);
            document.body.append(fixed_head);
            fixed_head.classList.add('head__fixed');
            info = fixed_head.lastElementChild.firstElementChild.cloneNode(true);
            info.lastElementChild.remove();
            info.style.width = "auto";
            fixed_head.childNodes[1].childNodes[3].remove();
            fixed_head.childNodes[1].append(info);
            fixed_head.lastElementChild.remove();
            fixed_head.firstElementChild.style.marginTop = "0.3vw"



        }
        pageSet = window.pageYOffset;

        if (pageSet < height)
            fixed_head.classList.remove('head__fixed__vis');
        else if (prevOffset < pageSet) {
            fixed_head.classList.remove('head__fixed__vis');
        }
        else {
            fixed_head.classList.add('head__fixed__vis');
        }
        prevOffset = pageSet;
    }


};


