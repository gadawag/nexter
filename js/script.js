var sidebar = document.querySelector('.sidebar');
var scrollTop;

//Open of close nav.
document.querySelector('#sidebar_btn').addEventListener('click', function(){
    sidebar.classList.toggle('active');
});

//Hide the sidebar on load of the page has offset at the top (scrolled).
window.onload = function () {
    if (window.innerWidth <= 1000) {
        if (window.pageYOffset > 99) {
            window.setTimeout(function(){ hideNav(); }, 500);
        }
    }
}

//Onscroll function hide / show sidebar.
window.onscroll = function () {
    if (window.innerWidth <= 1000) {
        if (window.pageYOffset > scrollTop) {
            window.setTimeout(function(){ hideNav(); }, 500);
        } else {
            window.setTimeout(function(){ showNav(); }, 500);
        }
    
        scrollTop = window.pageYOffset;
    }
}


//Functions to be used. Clean code :)
function hideNav () {
    if (sidebar.classList.contains('hidden') == false) {
        sidebar.classList.add('hidden');
    }
}

function showNav() {
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    }
}