const DIV_BUTTONS = document.getElementById("div__buttons");
const BTN_EASY = document.getElementById("button__easy");
const DIV_CONTAINER = document.getElementById("div__container");
const H2_QUESTION = document.getElementById("h2__question");
const DIV_BUTTONS_ANSWER = document.getElementById("div__buttons-answers");
const BTN_ANSWER_1 = document.getElementById("button__answer_1");
const BTN_ANSWER_2 = document.getElementById("button__answer_2");
const BTN_ANSWER_3 = document.getElementById("button__answer_3");
const BTN_ANSWER_4 = document.getElementById("button__answer_4");


let clicked = true;
let correctAnswer = false;
let currentQuestion = 0;
let clickedEasy = true;

const EASY_QUESTIONS = [{
    id: 1 ,
    question: "1.¿En que casa quedo seleccionado Harry Potter en Hogwarts?",
    answer_one: "Gryffindor",
    answer_two: "Hufflepuff",
    answer_three: "Ravenclaw",
    answer_fourth: "Slytherin",   
},{
    id: 2 ,
    question: "2.¿Cual era la criatura mítica que vivía en la cámara secreta?",
    answer_one: "Cerbero",
    answer_two: "Centauro",
    answer_three: "Basilisco",
    answer_fourth: "Hipogrifo",
},{
    id: 3 ,
    question: "3.¿cual es el apellido del director de Hogwarts?",
    answer_one: "Lockhart",
    answer_two: "Slughorn",
    answer_three: "Potter",
    answer_fourth: "Dumbledore",
},{
    id: 4 ,
    question: "4.¿Cuantos campeones usualmente participan en el torneo de los tres magos?",
    answer_one: "1",
    answer_two: "2",
    answer_three: "3",
    answer_fourth: "4",
},{
    id: 5 ,
    question: "5.¿Como se llama “el que no debe ser nombrado”?",
    answer_one: "Filch",
    answer_two: "Voldemort",
    answer_three: "El Principe Mestizo",
    answer_fourth: "Wallenby",
},{
    id: 6 ,
    question: "6.¿cual es el apodo que utilizan los alumnos para identificar al fantasma de la casa Gryffindor?",
    answer_one: "Nick casi decapitado",
    answer_two: "La dama gris",
    answer_three: "El baron sanguinario",
    answer_fourth: "El fraile gordo",
},{
    id: 7 ,
    question: "7.¿Cual es la función del gira tiempo?",
    answer_one: "multiplicar un objeto",
    answer_two: "Volver al pasado",
    answer_three: "Levitar un objeto",
    answer_fourth: "Cambiar la forma de una persona",
},{
    id: 8 ,
    question: "8.¿Como se llama el autobus que llama Harry de Privet Drive?",
    answer_one: "Noctambulo",
    answer_two: "Ford Anglia",
    answer_three: "Oesed",
    answer_fourth: "Knockturn",
},{
    id: 9 ,
    question: "9.¿Que  regalo misterioso recibió harry potter en navidad en su primer año en Hogwarts?",
    answer_one: "Un cromo de magos y brujas famosos",
    answer_two: "Un giroscopio",
    answer_three: "Una capa de invisibilidad",
    answer_fourth: "Un diario mágico",
},{
    id: 10 ,
    question: "10.¿Cuantos Horrocruxes creo Voldemort?",
    answer_one: "4",
    answer_two: "5",
    answer_three: "6",
    answer_fourth: "7",
},{
    id:11 ,
    question: "Felicidades contestaste todas las respuestas",

}
]



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

const PASS_QUESTIONS = ()=>{
    for (let i = 0; i <= EASY_QUESTIONS.length; i++) {
        H2_QUESTION.innerHTML = EASY_QUESTIONS[currentQuestion].question;
        
        BTN_ANSWER_1.innerHTML = EASY_QUESTIONS[currentQuestion].answer_one;
        
        BTN_ANSWER_2.innerHTML = EASY_QUESTIONS[currentQuestion].answer_two;
        
        BTN_ANSWER_3.innerHTML = EASY_QUESTIONS[currentQuestion].answer_three;
        
        BTN_ANSWER_4.innerHTML = EASY_QUESTIONS[currentQuestion].answer_fourth;
        
    }
}



BTN_EASY.addEventListener("click", ()=>{
    SHOW_EASY_QUESTIONS();
    if(clickedEasy){
        PASS_QUESTIONS();
        currentQuestion++
    }
})

BTN_ANSWER_1.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_QUESTIONS();
        currentQuestion++
    }
    /*if(clicked = true && counter === 1){
        BTN_ANSWER_1.style.backgroundColor = "green";
        clicked = false;
        correctAnswer = true;
        counter++;
    }
    else{
        BTN_ANSWER_1.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }
    console.log(counter);*/
})

BTN_ANSWER_2.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_QUESTIONS();
        currentQuestion++
    }
    /*if(clicked = true && counter === 1){
        BTN_ANSWER_2.style.backgroundColor = "red";
        clicked = false;
        correctAnswer = false;
        counter++;
      
    }
    else{
        BTN_ANSWER_2.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }*/
})

BTN_ANSWER_3.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_QUESTIONS();
        currentQuestion++
    }
    /*if(clicked = true && counter === 1){
        BTN_ANSWER_3.style.backgroundColor = "red";
        clicked = false;
        correctAnswer = false;
        counter++;
        
    }
    else{
        BTN_ANSWER_3.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }*/
})

BTN_ANSWER_4.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_QUESTIONS();
        currentQuestion++
    }
    /*if(clicked = true && counter === 1){
        BTN_ANSWER_4.style.backgroundColor = "red";
        clicked = false;
        correctAnswer = false;
        counter++;
        
    }
    else{
        BTN_ANSWER_4.style.backgroundColor = "#444";
        clicked = true;
        counter = 1;
    }*/
})


