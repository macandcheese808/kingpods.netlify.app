console.log("Welcome To KingPods!");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var loader = document.getElementById('preloader');

window.addEventListener('load', function() {
    loader.style.display = 'none'
})