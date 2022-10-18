var side_bar = document.getElementById("side_bar")
var top_nav = document.getElementById("top_nav")

document.getElementById("accounts").addEventListener('click', openSideBar)
document.getElementById("close_side_bar").addEventListener('click', closeSideBar)
document.addEventListener('click', bodyClick, true); 
document.getElementById("show_me").addEventListener('click', show_me);

window.onscroll = function() {scrollFunction()};

function openSideBar(e){
    side_bar.classList.add("opened")
    side_bar.style.animation = "open_side_bar 0.5s forwards"
}

function closeSideBar(e){
    side_bar.classList.remove("opened")
    side_bar.style.animation = "close_side_bar 0.5s forwards"

}

function bodyClick(e){
    if(side_bar.classList.contains("opened")){
        if (e.target.id == "side_bar" || $(e.target).parents("#side_bar").length) {
            // alert("Inside div");
          } else {
            closeSideBar(e)
          }
    }
}

function show_me(e) {
    document.querySelector('.list-page').scrollIntoView({
        behavior: 'smooth'
    })
}



function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight -50 || document.documentElement.scrollTop > window.innerHeight -50) {
        // console.log(top_nav)
        top_nav.classList.add('rainboww')
    }
    else if (document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
        // console.log(top_nav)
        top_nav.classList.remove('rainboww')
    }
}

$('.story_div').click(function() {
    $('#story_modal').modal('show')
});
