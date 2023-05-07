

const hide_button = document.querySelector("#hide-button")
const main_right_dep = document.querySelector(".main-right-dep")
const main_right_dep_button = document.querySelector(".main-right-dep-button")
const main_left = document.querySelector(".main-left")


hide_button.addEventListener("click",function(){
    main_right_dep.style.transform = "translatex(0)"
    hide_button.style.left = "30.4%"
    main_right_dep_button.style.backgroundColor = "#855fd880"
    setTimeout(() => {
        main_right_dep.style.transform = "translatex(-100%)"
        hide_button.style.left = "-2.2%"
        main_right_dep_button.style.backgroundColor = "#855fd81f"
    }, 10000);
})
main_left.addEventListener("click",function(){
    main_right_dep.style.transform = "translatex(-100%)"
    hide_button.style.left = "-2.2%"
    main_right_dep_button.style.backgroundColor = "#855fd81f"

})

