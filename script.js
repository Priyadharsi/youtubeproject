let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')
let banner = document.querySelector('.banner')

menuIcon.onclick = function(){
    sidebar.classList.toggle('small-sidebar')
    banner.classList.toggle('large-banner')
}


console.log(banner)