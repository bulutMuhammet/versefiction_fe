document.getElementById("accounts").addEventListener('click', openSideBar)
function openSideBar(e){
    side_bar.classList.add("opened")
    side_bar.style.animation = "open_side_bar 0.5s forwards"
}