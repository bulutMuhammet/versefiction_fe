tags_ul = document.querySelector("#tags_ul"),
    input = document.querySelector("#tags_inp"),
    tagNumb = document.querySelector("#remain_tag");
tags_list_div = document.querySelector("#tags_list_div");
tags_list_row = document.querySelector("#tags_list_row");
remain_warn = document.querySelector("#remain_warn");
var paragraph = document.querySelector("#paragraph")
var maxTags = 3,
    tags = [];



var tags_list = ["drama", "fantasy", "fairy tale", "historical",
                "romance", "action", "sci-fi", "horror", "mystery", "adventure",
                "random", "poem", "voltage", "humour", "vampire","classics"]


var colors = ["#A9D2F5", "#B9B4E1", "#fff"]

countTags();
createTag();

function startList(tag_list) {
    tags_list_row.innerHTML = "<div id=\"no_match\" class=\"text-center w-100 ghost\">we don't have any matching tags</div>\n"
    tag_list.forEach(tag => {
        tags_list_row.innerHTML += `<div class="col-auto p-1 mr-2 mt-2 tags_list_el not_close" onclick="addTagClick(this)">
                                            ${tag}
                                        </div>`
    })
}

startList(tags_list)

function countTags(trigger = false) {
    // input.focus();
    var count = maxTags - tags.length
    var color = "success"
    if (count == 0) {
        color = "danger"
    }

    var animation = ""
    if (trigger) {
        animation = "vibrate-3"
    }

    paragraph.innerHTML = `Press enter or add a comma after each tag.
                           <span id="remain_warn" style="display:inline-block;" class="${animation}" >
                           <span id="remain_tag" class="text-${color}">${count}</span> 
                           tags are remaining
                           </span>`


}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createTag() {
    tags_ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li class="not_close">${tag} <i class="fa fa-close not_close" onclick="remove(this, '${tag.trim()}')"></i></li>`;
        tags_ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}

function remove(element, tag) {

    var index = tags.indexOf(tag);

    var li = document.getElementsByClassName("tags_list_el");
    var tmp = []
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        tmp.push(txtValue.trim())
    }
    tmp.push(tag)
    startList(tmp.sort())
    if (index > -1) {
        tags.splice(index, 1);
    }

    element.parentElement.remove();
    countTags();
}


function addTag(e) {

    let tag = e.target.value.replace(/\s+/g, ' ');
    var li, i, txtValue;
    li = document.getElementsByClassName("tags_list_el");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.indexOf(tag) > -1) {
            li[i].style.display = "";
            li[i].classList.add("tag_visible")
        } else {
            li[i].style.display = "none";
            li[i].classList.remove("tag_visible")

        }

    }
    //
    if (tags.length != 3 && e.key == "Enter") {
        for (i = 0; i < li.length; i++) {
            if (li[i].textContent.trim() === tag) {
                li[i].remove()
            }
        }
    }
    if (e.key == "Enter") {
        if (tag.length > 1 && !tags.includes(tag) && tags_list.includes(tag)) {
            if (tags.length < 3) {

                tags.push(tag.trim());
                createTag();
            } else {
                countTags(true)
            }
        }
        e.target.value = "";

        for (i = 0; i < li.length; i++) {
            li[i].style.display = "";
            li[i].classList.add("tag_visible")

        }

    }
    var visible_tags = document.getElementsByClassName("tag_visible")
    var no_match = document.getElementById("no_match")
    if (visible_tags.length == 0) {
        no_match.classList.remove("ghost")
    } else {
        no_match.classList.add("ghost")
    }
}

function addTagClick(e) {
    var content = e.textContent

    if (!tags.includes(content)) {
        if (tags.length < 3) {

            tags.push(content.trim());
            createTag();
            li = document.getElementsByClassName("tags_list_el");

            for (i = 0; i < li.length; i++) {
                li[i].style.display = "";
                li[i].classList.add("tag_visible")

            }
            e.remove()
        } else {
            countTags(true)
        }
    }

    if (tags_list_row.children.length == 0) {
        tags_ul.classList.remove("tags_ul_no_radius")
        tags_list_div.classList.add("ghost")
    }

}


document.addEventListener("mousedown", function (e) {

    var clicky = e.target;
    if (!clicky.classList.contains("not_close")) {
        tags_ul.classList.remove("tags_ul_no_radius")
        tags_list_div.classList.add("ghost")
    }
});

input.addEventListener('focus', (event) => {
    if (tags_list_row.children.length != 0) {
        tags_ul.classList.add("tags_ul_no_radius")
        tags_list_div.classList.remove("ghost")
    }

});

input.addEventListener("keyup", addTag);

