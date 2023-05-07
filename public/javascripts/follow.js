


// followers main page js start

const followers_button = document.querySelector(".Followers-button")
const followers_main_page = document.querySelector(".Followers-main-page")

const main_lefttt = document.querySelector(".main-left")
const main_rightt = document.querySelector(".main-right")

const close_folloers_button = document.querySelector(".follwoers-clode-button")



followers_button.addEventListener("click", function(){
    console.log("hyeeee");
    followers_main_page.style.opacity="1";
    followers_main_page.style.zIndex="55";

    main_rightt.style.filter="blur(8px)"
    main_rightt.style.WebkitFilter="blur(8px)"
    main_lefttt.style.filter="blur(8px)"
    main_lefttt.style.WebkitFilter="blur(8px)"


})
close_folloers_button.addEventListener("click",function(){
    followers_main_page.style.opacity="0";
    followers_main_page.style.zIndex="-55";
    main_rightt.style.filter="blur(0px)"
    main_rightt.style.WebkitFilter="blur(0px)"
    main_lefttt.style.filter="blur(0px)"
    main_lefttt.style.WebkitFilter="blur(0px)"
})


// followers main page js end



const following_button = document.querySelector(".following-button")
const following_main_page = document.querySelector(".following-main-page")

const close_following_button = document.querySelector(".following-clode-button")



following_button.addEventListener("click", function(){
    following_main_page.style.opacity="1";
    following_main_page.style.zIndex="55";

    main_rightt.style.filter="blur(8px)"
    main_rightt.style.WebkitFilter="blur(8px)"
    main_lefttt.style.filter="blur(8px)"
    main_lefttt.style.WebkitFilter="blur(8px)"


})
close_following_button.addEventListener("click",function(){
    following_main_page.style.opacity="0";
    following_main_page.style.zIndex="-55";
    main_rightt.style.filter="blur(0px)"
    main_rightt.style.WebkitFilter="blur(0px)"
    main_lefttt.style.filter="blur(0px)"
    main_lefttt.style.WebkitFilter="blur(0px)"
})


// followers main page js end




