let leftColumn = document.getElementById('leftColumn');

let closeNav = document.getElementById('closeNav');

let closeNavButton = document.getElementById('closeNavButton');

closeNav.onclick = function () {

    if (leftColumn.classList.contains('nav-show')) {

        leftColumn.classList.remove('nav-show');
        closeNavButton.classList.remove('active-nav');

    } else {

        leftColumn.classList.add('nav-show');
        closeNavButton.classList.add('active-nav');        
    }
    
}
