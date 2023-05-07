const profilePic = document.querySelector(".profilePic");
const post_uplode_panal_main = document.querySelector(".post-uplode-panal-main");

        profilePic.addEventListener("click", () => {
            post_uplode_panal_main.style.opacity="1";
            post_uplode_panal_main.style.zIndex="55";

            main_rightt.style.filter="blur(8px)"
            main_rightt.style.WebkitFilter="blur(8px)"
            main_lefttt.style.filter="blur(8px)"
            main_lefttt.style.WebkitFilter="blur(8px)"
        });

const uplode_close_button = document.querySelector(".uplode-close-button");

        uplode_close_button.addEventListener("click", () => {
            post_uplode_panal_main.style.opacity="0";
            post_uplode_panal_main.style.zIndex="-55";

            main_rightt.style.filter="blur(0px)"
            main_rightt.style.WebkitFilter="blur(0px)"
            main_lefttt.style.filter="blur(0px)"
            main_lefttt.style.WebkitFilter="blur(0px)"
        });



// post uplode start

const post_uplode_panal = document.querySelector(".post-uplode-panal");
const post_uplode_button_main = document.querySelector(".post-uplode-img");

    post_uplode_button_main.addEventListener("click", () => {
            console.log("hello");
            post_uplode_panal.click();
        });



