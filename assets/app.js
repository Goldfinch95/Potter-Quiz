const DIV_BUTTONS = document.getElementById("div__buttons");
const BTN_EASY = document.getElementById("button__easy");
const DIV_CONTAINER = document.getElementById("div__container");

let clicked = true;

const SHOW_EASY_QUESTIONS = () => {
    if(clicked = true){
        DIV_BUTTONS.style.display = "none";
        DIV_CONTAINER.style.display = "flex";
        clicked = false;
    }
    else{
        DIV_BUTTONS.style.display = "flex";
        DIV_CONTAINER.style.display = "none";
        clicked = true;
    }
}



BTN_EASY.addEventListener("click", ()=>{
    SHOW_EASY_QUESTIONS();
})
