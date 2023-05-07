console.log("hye");

// // like pages show start

const like_button = document.querySelector(".like-button")
const like_main_page = document.querySelector(".like-main-page")
const like_close_button = document.querySelector(".like-clode-button")

like_button.addEventListener("click", function(){
    console.log("hye");
    like_main_page.style.opacity="1";
    like_main_page.style.zIndex="50";

    main_rightt.style.filter="blur(8px)"
    main_rightt.style.WebkitFilter="blur(8px)"
    main_lefttt.style.filter="blur(8px)"
    main_lefttt.style.WebkitFilter="blur(8px)"
})


like_close_button.addEventListener("click",function(){
    like_main_page.style.opacity="0";
    like_main_page.style.zIndex="-55";

    main_rightt.style.filter="blur(0px)"
    main_rightt.style.WebkitFilter="blur(0px)"
    main_lefttt.style.filter="blur(0px)"
    main_lefttt.style.WebkitFilter="blur(0px)"
})

// comm page

const comm_button = document.querySelector(".comm-button")
const comm_main_page = document.querySelector(".comm-main-page")
const comm_close_button = document.querySelector(".comm-clode-button")



comm_button.addEventListener("click", function(){
    console.log("hye");
    comm_main_page.style.opacity="1";
    comm_main_page.style.zIndex="50";

    main_rightt.style.filter="blur(8px)"
    main_rightt.style.WebkitFilter="blur(8px)"
    main_lefttt.style.filter="blur(8px)"
    main_lefttt.style.WebkitFilter="blur(8px)"
})


comm_close_button.addEventListener("click",function(){
    comm_main_page.style.opacity="0";
    comm_main_page.style.zIndex="-55";

    main_rightt.style.filter="blur(0px)"
    main_rightt.style.WebkitFilter="blur(0px)"
    main_lefttt.style.filter="blur(0px)"
    main_lefttt.style.WebkitFilter="blur(0px)"
})

// // like pages show end




// like comment button post

const like_post_button = document.querySelector(".like-post-button")
const like_fill = document.querySelector(".ri-heart-fill")




like_post_button.addEventListener("click",function(){
    
    like_fill.style.display="initial";
    like_post_button.style.opacity="0";
    like_post_button.style.zIndex="-5";
})


like_fill.addEventListener("click",function(){
    
    like_fill.style.display="none";
    like_post_button.style.opacity="1";
    like_post_button.style.zIndex="5";
})

// commnets 

const comm_post_button = document.querySelector(".comm-post-button")
const comm_fill = document.querySelector(".ri-chat-3-fill")


comm_post_button.addEventListener("click",function(){
    
    comm_fill.style.display="initial";
    comm_post_button.style.opacity="0";
    comm_post_button.style.zIndex="-5";
})


comm_fill.addEventListener("click",function(){
    
    comm_fill.style.display="none";
    comm_post_button.style.opacity="1";
    comm_post_button.style.zIndex="5";
})

// share 

const share_post_button = document.querySelector(".share-post-button")
const share_fill = document.querySelector(".ri-share-fill")


share_post_button.addEventListener("click",function(){
    
    share_fill.style.display="initial";
    share_post_button.style.opacity="0";
    share_post_button.style.zIndex="-5";
})


share_fill.addEventListener("click",function(){
    
    share_fill.style.display="none";
    share_post_button.style.opacity="1";
    share_post_button.style.zIndex="5";
})



// main  chat js button



// edit page js img change start

const send_button = document.querySelector("#send-button")
const send_button_main = document.querySelector("#send-button-main")


send_button_main.addEventListener("click", function(){
    console.log("hye");
    send_button.click();

})

