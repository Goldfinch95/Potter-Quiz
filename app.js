import data from "./assets/data.json" assert { type: "json" }
import {DIV_BUTTONS, BTN_EASY, BTN_MIDDLE, BTN_HARD, DIV_CONTAINER, H2_QUESTION, BTN_ANSWER, DIV_CONTAINER_TWO, H2_FINAL_RESULT} from "./pepito.js"


let currentQuestion = 0;
let selection;
let correctAnswers = 0;

const DELAY = (ms) => new Promise(resolve => setTimeout(resolve,ms));

const SHOW_QUESTIONS = () => {
    DIV_BUTTONS.style.display = "none";
    DIV_CONTAINER.style.display = "flex";
    DIV_CONTAINER_TWO.style.display = "none";
}

const PASS_QUESTIONS = (selectedDifficult)=>{
    if(currentQuestion <= 9){
        H2_QUESTION.innerHTML = selectedDifficult[currentQuestion].text;
        BTN_ANSWER[0].innerHTML = selectedDifficult[currentQuestion].answers[0].text;
        BTN_ANSWER[1].innerHTML = selectedDifficult[currentQuestion].answers[1].text;
        BTN_ANSWER[2].innerHTML = selectedDifficult[currentQuestion].answers[2].text;
        BTN_ANSWER[3].innerHTML = selectedDifficult[currentQuestion].answers[3].text;
    }
    else{
        SHOW_RESULTS();
    }
}

const SET_BUTTONS = ()=>{
    for (let i = 0; i < BTN_ANSWER.length; i++) {
        BTN_ANSWER[i].addEventListener("click", async ()=>{
            if(selection[currentQuestion].answers[i].is_correct){
                BTN_ANSWER[i].style.backgroundColor = "green";
                correctAnswers++;
                await DELAY(1000);
                BTN_ANSWER[i].style.backgroundColor = "#444";
            }else{
                BTN_ANSWER[i].style.backgroundColor = "red";
                await DELAY(1000);
                BTN_ANSWER[i].style.backgroundColor = "#444";
            }
            currentQuestion++;
            PASS_QUESTIONS(selection);
        })
    }
}

const SHOW_RESULTS = ()=>{
    H2_FINAL_RESULT.innerHTML = `Resultado: ${correctAnswers}/10`
    DIV_CONTAINER.style.display = "none";
    DIV_CONTAINER_TWO.style.display = "flex";
}

BTN_EASY.addEventListener("click", ()=>{
    selection = data.easy_mode.questions;
    SET_BUTTONS();
    SHOW_QUESTIONS();
    PASS_QUESTIONS(selection);
    
}
)

BTN_MIDDLE.addEventListener("click", ()=>{
    selection = data.normal_mode.questions;
    SET_BUTTONS();
    SHOW_QUESTIONS();
    PASS_QUESTIONS(selection);
    
})

BTN_HARD.addEventListener('click', ()=>{
    selection = data.hardcore_mode.questions;
    SET_BUTTONS();
    SHOW_QUESTIONS();
    PASS_QUESTIONS(selection);
    
})






