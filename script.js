const iconomenu = document.querySelector("#icono")
    menu = document.querySelector("#menu");

iconomenu.addEventListener("click", (e) =>{

    menu.classlist.tpggle("active")
    document.body.classList.toggle("opacity");

})

 