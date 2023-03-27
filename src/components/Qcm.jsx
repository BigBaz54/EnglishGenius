import React, {useState} from "react";

// Components


// Styles
import "../styles/Qcm.css";

// Script
const [correctScore, setCorrectScore] = useState(0);
const [total_count, setTotal_count] = useState(0);

let score = 0;
let idQuestion = 0;

// Fetch questions
const [currentQuestion, setCurrentQuestion] = useState("no question");
const [currentAnswers, setCurrentAnswers] = useState(["answer1", "answer2", "answer3", "answer4"]);
const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("answer1");
/*
function fetchQuestions() {
    fetch("../data/questions.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(question => {
                let answers = [];
                answers.push(question.correctAnswer);
                for (let i = 0; i < question.incorrectAnswers.length; i++) {
                    answers.push(question.incorrectAnswers[i]);
                }
                setCurrentQuestion(question.question);
                setCurrentAnswers(answers);
                setCurrentCorrectAnswer(question.correctAnswer);
            });
        })
        .catch(error => console.log(error));
}

function nextQuestion() {
    setCurrentQuestion(currentQuestion[Math.floor(Math.random() * currentQuestion.length)]);
    fetchQuestions();
}

const answerButtons = document.querySelectorAll(".buttonQCM");
answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        if ("to do") {
            score++;
            total_count.innerContext = total_count.innerContext + 1;
            correctScore.innerContext = score;
        }
    })
});
*/
export default function QCM() {
    return (
        <div className={"container"}>
            <div className={"question"}>
                <h1>{currentQuestion}</h1>
            </div>
            <div className={"answers"}>
                <button className={"buttonQCM"} >{currentAnswers[0]}</button>
                <button className={"buttonQCM"} >{currentAnswers[1]}</button>
                <button className={"buttonQCM"} >{currentAnswers[2]}</button>
                <button className={"buttonQCM"} >{currentAnswers[3]}</button>
            </div>
            <div className={"score"}>
                <h1>Score: {correctScore} / {total_count}</h1>
            </div>
        </div>
    );
}