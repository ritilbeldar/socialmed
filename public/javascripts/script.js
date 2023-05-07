console.log("hye");
// post more ditails icon

const more = document.querySelector(".ri-more-line")

const clos_more = document.querySelector(".ri-close-line")


const more_page = document.querySelector(".post-more-all-main")
// const profile_more_page = document.querySelector(".profile-post-more-all-main")


more.addEventListener("click",function(){
    more_page.style.display = "initial";
    setTimeout(() => {
        more_page.style.display = "none";
        }, 2000);
        console.log("hye");
})
clos_more.addEventListener("click",function(){
    more_page.style.display = "none";
    
})

// edit page js img change start

const bg_edit = document.querySelector("#bg-edit")
const bg_edit_button = document.querySelector("#bg-edit-button")


const profile_edit = document.querySelector("#profile-edit")
const profile_edit_button = document.querySelector(".profile-edit-button")


profile_edit_button.addEventListener("click", function(){
    bg_edit.click();

})



bg_edit_button.addEventListener("click", () => {
    bg_edit.click();
});








const edit_button = document.querySelector(".edit-button")
const main_profile_window = document.querySelector(".main-profile-main")
const main_profile_edit = document.querySelector(".edit-profile-page")
const edit_button_confirm = document.querySelector(".edit_button")

const main_leftt = document.querySelector(".main-left")
const main_right = document.querySelector(".main-right")

const close_edit_button = document.querySelector(".edit-clode-button")






edit_button.addEventListener("click", function(){
    main_profile_edit.style.opacity="1";
    main_profile_edit.style.zIndex="55";

    main_right.style.filter="blur(8px)"
    main_right.style.WebkitFilter="blur(8px)"
    main_leftt.style.filter="blur(8px)"
    main_leftt.style.WebkitFilter="blur(8px)"


})
edit_button_confirm.addEventListener("click", function(){
    main_profile_edit.style.opacity="0";
    main_profile_edit.style.zIndex="-55";

    main_right.style.filter="blur(0px)"
    main_right.style.WebkitFilter="blur(0px)"
    main_leftt.style.filter="blur(0px)"
    main_leftt.style.WebkitFilter="blur(0px)"

})

close_edit_button.addEventListener("click",function(){
    main_profile_edit.style.opacity="0";
    main_profile_edit.style.zIndex="-55";
    main_right.style.filter="blur(0px)"
    main_right.style.WebkitFilter="blur(0px)"
    main_leftt.style.filter="blur(0px)"
    main_leftt.style.WebkitFilter="blur(0px)"
})


