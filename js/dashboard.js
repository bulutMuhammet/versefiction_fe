var side_bar = document.getElementById("side_bar")

document.getElementById("close_side_bar").addEventListener('click', closeSideBar)

document.getElementById("accounts").addEventListener('click', openSideBar)
function openSideBar(e){
    side_bar.classList.add("opened")
    side_bar.style.animation = "open_side_bar 0.5s forwards"
}
function closeSideBar(e){
    side_bar.classList.remove("opened")
    side_bar.style.animation = "close_side_bar 0.5s forwards"

}
