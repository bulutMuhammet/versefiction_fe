var team_sort = document.getElementById("team_sort")
var tp_left_list = document.getElementById("tp_left_list")
var delete_button = document.getElementById("delete_button")

new Sortable(team_sort, {
    animation: 150,
    multiDrag: true,
    selectedClass: 'tp_el_selected',
    onEnd: function (e) {
        console.log("alooo")
        make_index()
    },
    onSelect: function (/**Event*/evt) {
        delete_button.classList.add("active_button")
    },


});

document.addEventListener("click", (e)=>{
    var slc = document.getElementsByClassName("tp_el_selected")
    if (slc.length == 0){
        delete_button.classList.remove("active_button")
    }
})

make_index()
function make_index(){
    var tp_elemens = document.getElementsByClassName("tp_el")

    for (var i = 0; i < tp_elemens.length; i++) {
        var tmp_index = tp_elemens[i].getElementsByClassName("el_line_text")[0]
        tmp_index.innerHTML = `#${i+1}`
    }
}

function addElementToRight(e){
    var el = e.parentElement.parentElement
    var el_img = el.getElementsByTagName("img")[0].src
    var el_title = el.getElementsByTagName("span")[0].textContent
    var el_type = el.getElementsByTagName("small")[0].textContent

    team_sort.innerHTML += `<div class="tp_el mb-3 mr-3 pt-3 pb-3 avd">
                                    <span class="el_line_text avd">#1</span>
                                    <img src="${el_img}" alt="" class="avd"> <br>
                                    <span class="avd">${el_title}</span> <br>
                                    <small class="text-muted avd">${el_type}</small>
                             </div>`
    make_index()
    el.remove()
    // console.log(el)
}

function removeElements(e){

    var slc = document.getElementsByClassName("tp_el_selected")
    for (var i = 0; i < slc.length; i++) {
        var tmp = slc[i]
        var el_img = tmp.getElementsByTagName("img")[0].src
        var el_title = tmp.getElementsByTagName("span")[1].textContent
        var el_type = tmp.getElementsByTagName("small")[0].textContent
        tp_left_list.innerHTML += `<div class="col-12 list_el pt-3 pb-3 pl-0 mb-2 row">
                                        <div class="col-2">
                                            <img class="float-left" src="${el_img}" alt="">
                                        </div>
                                        <div class="col ml-3">
                                            <span>${el_title}</span>
                                            <small class="text-muted">${el_type}</small>
                                        </div>
                                        <div class="col">
                                            <button class="story_button green radius_28 float-right"
                                                    onclick="addElementToRight(this)">
                                                add
                                            </button>
                                        </div>
                                    </div>`
        tmp.remove()
    }
}