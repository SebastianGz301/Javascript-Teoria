const MenuToggle= document.querySelector(".MenuToggle")
const Navigation = document.querySelector(".navigation")

MenuToggle.onclick = function(){
    Navigation.classList.toggle("open")
}

const list = document.querySelectorAll(".list")
function activarLink(){
    list.forEach((item)=>
    item.classList.remove("active"))
    this.classList.add("active")
}
list.forEach((item)=>
item.addEventListener("click", activarLink))
