const DIV_BUTTONS = document.getElementById("div__buttons");
const BTN_EASY = document.getElementById("button__easy");
const BTN_MIDDLE = document.getElementById("button__medium");
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
let clickedMiddle = true;
let counter = 1;

const EASY_QUESTIONS = [{
    
    question: "1.¿En que casa quedo seleccionado Harry Potter en Hogwarts?",
    answer_one: "Gryffindor",
    answer_two: "Hufflepuff",
    answer_three: "Ravenclaw",
    answer_fourth: "Slytherin",   
},{
    
    question: "2.¿Cual era la criatura mítica que vivía en la cámara secreta?",
    answer_one: "Cerbero",
    answer_two: "Centauro",
    answer_three: "Basilisco",
    answer_fourth: "Hipogrifo",
},{
    
    question: "3.¿cual es el apellido del director de Hogwarts?",
    answer_one: "Lockhart",
    answer_two: "Slughorn",
    answer_three: "Potter",
    answer_fourth: "Dumbledore",
},{
    
    question: "4.¿Cuantos campeones usualmente participan en el torneo de los tres magos?",
    answer_one: "1",
    answer_two: "2",
    answer_three: "3",
    answer_fourth: "4",
},{
    
    question: "5.¿Como se llama “el que no debe ser nombrado”?",
    answer_one: "Filch",
    answer_two: "Voldemort",
    answer_three: "El Principe Mestizo",
    answer_fourth: "Wallenby",
},{
    
    question: "6.¿cual es el apodo que utilizan los alumnos para identificar al fantasma de la casa Gryffindor?",
    answer_one: "Nick casi decapitado",
    answer_two: "La dama gris",
    answer_three: "El baron sanguinario",
    answer_fourth: "El fraile gordo",
},{
    
    question: "7.¿Cual es la función del gira tiempo?",
    answer_one: "multiplicar un objeto",
    answer_two: "Volver al pasado",
    answer_three: "Levitar un objeto",
    answer_fourth: "Cambiar la forma de una persona",
},{
    
    question: "8.¿Como se llama el autobus que llama Harry de Privet Drive?",
    answer_one: "Noctambulo",
    answer_two: "Ford Anglia",
    answer_three: "Oesed",
    answer_fourth: "Knockturn",
},{
    
    question: "9.¿Que  regalo misterioso recibió harry potter en navidad en su primer año en Hogwarts?",
    answer_one: "Un cromo de magos y brujas famosos",
    answer_two: "Un giroscopio",
    answer_three: "Una capa de invisibilidad",
    answer_fourth: "Un diario mágico",
},{
    
    question: "10.¿Cuantos Horrocruxes creo Voldemort?",
    answer_one: "4",
    answer_two: "5",
    answer_three: "6",
    answer_fourth: "7",
}
]

const INTERMEDIATE_QUESTIONS = [{
    
    question: "1.¿Cuantos puntos se obtienen al capturar la Snitch Dorada en un partido de quidditch?",
    answer_one: "300 puntos",
    answer_two: "250 puntos",
    answer_three: "100 puntos",
    answer_fourth: "150 puntos",   
},{
    
    question: "2.¿cual es la mascota de la casa Slytherin?",
    answer_one: "Una serpiente",
    answer_two: "Un león",
    answer_three: "Un tejón",
    answer_fourth: "Una águila",
},{
    
    question: "3.¿Cuales fueron las 3 pruebas que tuvieron que pasar los campeones del torneo de los tres magos?",
    answer_one: "Atravesar el Bosque Prohibido, Volar hacia Londres, Recolectar recuerdos de un pensadero",
    answer_two: "Sobrevivir al Dragon, nadar en el Lago Negro, atravesar el laberinto",
    answer_three: "Montar un Dragon, Beber Una poción dolorosa, Luchar contra inferis en una cueva",
    answer_fourth: "Jugar un partido de quidditch, Matar a un basilisco, Recorrer un pasillo lleno de profecías",
},{
    
    question: "4.¿Como se llamaba el hipogrifo de Hagrid que luego paso a ser parte de Sirius?",
    answer_one: "Aragog",
    answer_two: "Buckbeak",
    answer_three: "Grumpy",
    answer_fourth: "Nagini",
},{
    
    question: "5.¿Donde viven los Weasley?",
    answer_one: "En una mansion",
    answer_two: "En Privet Drive",
    answer_three: "En el callejón Diagon",
    answer_fourth: "En la madriguera",
},{
    
    question: "6.¿como se llama la sala que comúnmente se le dice que “va y viene”?",
    answer_one: "La sala gringotts",
    answer_two: "La sala de los menesteres",
    answer_three: "La sala olivander",
    answer_fourth: "La sala de los misterios",
},{
    
    question: "7.¿como se llamaba la mascota acromantula de Hagrid?",
    answer_one: "Buckbeak",
    answer_two: "Nagini",
    answer_three: "Aragog",
    answer_fourth: "Brutus",
},{
    
    question: "8.¿Como se llama el ministro de magia que no cree que Voldemort regreso?",
    answer_one: "Cornelius Fudge",
    answer_two: "Rufus Scrimgeour",
    answer_three: "Pius Thicknesse",
    answer_fourth: "Kingsley Schacklebolt",
},{
    
    question: "9.¿Que otorga la poción “felix felicis”?",
    answer_one: "Suerte",
    answer_two: "Transformación del aspecto",
    answer_three: "Felicidad",
    answer_fourth: "Sueño",
},{
    
    question: "10.¿Como se llamaba la Mascota de Dumbledore?",
    answer_one: "Crookshanks",
    answer_two: "Pigwidgeon",
    answer_three: "Fawkes",
    answer_fourth: "Scabers",
}]



const SHOW_QUESTIONS = () => {
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


const PASS_EASY_QUESTIONS = ()=>{
    for (let i = 0; i <= EASY_QUESTIONS.length; i++) {
        H2_QUESTION.innerHTML = EASY_QUESTIONS[currentQuestion].question;
        
        BTN_ANSWER_1.innerHTML = EASY_QUESTIONS[currentQuestion].answer_one;
        
        BTN_ANSWER_2.innerHTML = EASY_QUESTIONS[currentQuestion].answer_two;
        
        BTN_ANSWER_3.innerHTML = EASY_QUESTIONS[currentQuestion].answer_three;
        
        BTN_ANSWER_4.innerHTML = EASY_QUESTIONS[currentQuestion].answer_fourth;
        
    }
}

const PASS_MIDDLE_QUESTIONS = ()=>{
    for (let i = 0; i <= INTERMEDIATE_QUESTIONS.length; i++) {
        H2_QUESTION.innerHTML = INTERMEDIATE_QUESTIONS[currentQuestion].question;
        
        BTN_ANSWER_1.innerHTML = INTERMEDIATE_QUESTIONS[currentQuestion].answer_one;
        
        BTN_ANSWER_2.innerHTML = INTERMEDIATE_QUESTIONS[currentQuestion].answer_two;
        
        BTN_ANSWER_3.innerHTML = INTERMEDIATE_QUESTIONS[currentQuestion].answer_three;
        
        BTN_ANSWER_4.innerHTML = INTERMEDIATE_QUESTIONS[currentQuestion].answer_fourth;
    }
}



BTN_EASY.addEventListener("click", ()=>{
    let clickedEasy = true;
    SHOW_QUESTIONS();
    if(clickedEasy){
        PASS_EASY_QUESTIONS();
        currentQuestion++;
        clickedMiddle = false;
    }
})

BTN_MIDDLE.addEventListener("click", ()=>{
    let clickedMiddle = true;
    SHOW_QUESTIONS();
    if(clickedMiddle){
        PASS_MIDDLE_QUESTIONS();
        currentQuestion++;
        clickedEasy = false;
    }
})

BTN_ANSWER_1.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_EASY_QUESTIONS();
        currentQuestion++;
    }
    else if(clickedMiddle){
        PASS_MIDDLE_QUESTIONS();
        currentQuestion++;
    }
   
})

BTN_ANSWER_2.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_EASY_QUESTIONS();
        currentQuestion++;
    }
    else if(clickedMiddle){
        PASS_MIDDLE_QUESTIONS();
        currentQuestion++;
    }
})

BTN_ANSWER_3.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_EASY_QUESTIONS();
        currentQuestion++;
    }
    else if(clickedMiddle){
        PASS_MIDDLE_QUESTIONS();
        currentQuestion++;
    }
})

BTN_ANSWER_4.addEventListener("click", ()=>{
    if(clickedEasy){
        PASS_EASY_QUESTIONS();
        currentQuestion++;
    }
    else if(clickedMiddle){
        PASS_MIDDLE_QUESTIONS();
        currentQuestion++;
    }
})


