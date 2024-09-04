fetch("./assets/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        // Usa el objeto data aquí
        let currentQuestion = 0;
        let selection;
        let correctAnswers = 0;

        const DIV_BUTTONS = document.getElementById("div__buttons");
        const BTN_EASY = document.getElementById("button__easy");
        const BTN_MIDDLE = document.getElementById("button__medium");
        const BTN_HARD = document.getElementById("button__hard");
        const DIV_CONTAINER = document.getElementById("div__container");
        const H2_QUESTION = document.getElementById("h2__question");
        const BTN_ANSWER = document.getElementsByClassName("button__answer");
        const DIV_CONTAINER_TWO = document.getElementById("div__container-2");
        const H2_FINAL_RESULT = document.getElementById("h2__final-result");

        const DELAY = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const SHOW_QUESTIONS = () => {
            DIV_BUTTONS.style.display = "none";
            DIV_CONTAINER.style.display = "flex";
            DIV_CONTAINER_TWO.style.display = "none";
        };

        const PASS_QUESTIONS = (selectedDifficult) => {
            if (currentQuestion <= 9) {
                H2_QUESTION.innerHTML = selectedDifficult[currentQuestion].text;
                BTN_ANSWER[0].innerHTML = selectedDifficult[currentQuestion].answers[0].text;
                BTN_ANSWER[1].innerHTML = selectedDifficult[currentQuestion].answers[1].text;
                BTN_ANSWER[2].innerHTML = selectedDifficult[currentQuestion].answers[2].text;
                BTN_ANSWER[3].innerHTML = selectedDifficult[currentQuestion].answers[3].text;
            } else {
                SHOW_RESULTS();
            }
        };

        const SET_BUTTONS = () => {
            for (let i = 0; i < BTN_ANSWER.length; i++) {
                BTN_ANSWER[i].addEventListener("click", async () => {
                    if (selection[currentQuestion].answers[i].is_correct) {
                        BTN_ANSWER[i].style.backgroundColor = "green";
                        correctAnswers++;
                        await DELAY(1000);
                        BTN_ANSWER[i].style.backgroundColor = "#444";
                    } else {
                        BTN_ANSWER[i].style.backgroundColor = "red";
                        await DELAY(1000);
                        BTN_ANSWER[i].style.backgroundColor = "#444";
                    }
                    currentQuestion++;
                    PASS_QUESTIONS(selection);
                });
            }
        };

        const SHOW_RESULTS = () => {
            H2_FINAL_RESULT.innerHTML = `Resultado: ${correctAnswers}/10`;
            DIV_CONTAINER.style.display = "none";
            DIV_CONTAINER_TWO.style.display = "flex";
        };

        BTN_EASY.addEventListener("click", () => {
            selection = data.easy_mode.questions;
            SET_BUTTONS();
            SHOW_QUESTIONS();
            PASS_QUESTIONS(selection);
        });

        BTN_MIDDLE.addEventListener("click", () => {
            selection = data.normal_mode.questions;
            SET_BUTTONS();
            SHOW_QUESTIONS();
            PASS_QUESTIONS(selection);
        });

        BTN_HARD.addEventListener("click", () => {
            selection = data.hardcore_mode.questions;
            SET_BUTTONS();
            SHOW_QUESTIONS();
            PASS_QUESTIONS(selection);
        });

    })
    .catch(error => console.error('Error:', error));
