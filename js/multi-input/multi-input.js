const tags_ul = document.querySelector("#tags_ul"),
    input = document.querySelector("#tags_inp"),
    tagNumb = document.querySelector("#remain_tag");

let maxTags = 10,
    tags = [];

let colors = ["#A9D2F5", "#B9B4E1", "#fff"]

countTags();
createTag();

function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}

function createTag(){
    tags_ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li >${tag} <i class="fa fa-close" onclick="remove(this, '${tag}')"></i></li>`;
        tags_ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}

function remove(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTags();
}

function addTag(e){
    // e.preventDefault()

    if(e.key == "Enter"){
        // e.preventDefault();
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);


