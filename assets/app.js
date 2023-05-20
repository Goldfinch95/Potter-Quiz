const DIV_BUTTONS = document.getElementById("div__buttons");
const BTN_EASY = document.getElementById("button__easy");
const DIV_CONTAINER = document.getElementById("div__container");
const BTN_ANSWER_1 = document.getElementById("button__answer_1");
const BTN_ANSWER_2 = document.getElementById("button__answer_2");
const BTN_ANSWER_3 = document.getElementById("button__answer_3");
const BTN_ANSWER_4 = document.getElementById("button__answer_4");

let clicked = true;
let counter = 1

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

BTN_ANSWER_1.addEventListener("click", ()=>{
    if(clicked = true && counter === 1){
        BTN_ANSWER_1.style.backgroundColor = "green";
        clicked = false;
        counter++;
    }
    else{
        BTN_ANSWER_1.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }
})

BTN_ANSWER_2.addEventListener("click", ()=>{
    if(clicked = true && counter === 1){
        BTN_ANSWER_2.style.backgroundColor = "red";
        clicked = false;
        counter++;
    }
    else{
        BTN_ANSWER_2.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }
})

BTN_ANSWER_3.addEventListener("click", ()=>{
    if(clicked = true && counter === 1){
        BTN_ANSWER_3.style.backgroundColor = "red";
        clicked = false;
        counter++;
    }
    else{
        BTN_ANSWER_3.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }
})

BTN_ANSWER_4.addEventListener("click", ()=>{
    if(clicked = true && counter === 1){
        BTN_ANSWER_4.style.backgroundColor = "red";
        clicked = false;
        counter++;
    }
    else{
        BTN_ANSWER_4.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }
})


