let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with mansonry

new Masonry("#posts .grid",{
    itemSelector: '.grid-item',
    gutter: 20
});

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

// dark mode
var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })

