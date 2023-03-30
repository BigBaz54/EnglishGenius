import React, {useState} from "react";

// Components


// Styles
import "../styles/Qcm.css";
import questionsJSON from "../question/test.json";
export default function QCM() {
    // Script
    const [correctScore, setCorrectScore] = useState(0);
    const [total_count, setTotal_count] = useState(0);

    let score = 0;

    // Fetch questions
    const [currentQuestion, setCurrentQuestion] = useState("no question");
    const [currentAnswers, setCurrentAnswers] = useState(["answer1", "answer2", "answer3", "answer4"]);
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("answer1");

    function fetchQuestions() {
        fetch(questionsJSON)
            .then(response => response.json())
            .then(data => {
                let idQuestion = Math.floor(Math.random() * data.length);
                data.forEach(question => {
                    if (question.id == idQuestion) {
                        setCurrentQuestion(question.question);
                        setCurrentCorrectAnswer(question.correctAnswer);
                        let answers = [];
                        answers.push(question.correctAnswer);
                        for(let i = 0; i < question.answers.length; i++) {
                            answers.push(question.answers[i]);
                        }
                        setCurrentAnswers(answers);
                    }
                });
            })
            .catch(error => console.log(error));
    }

    function nextQuestion() {
        setCurrentQuestion(currentQuestion[Math.floor(Math.random() * currentQuestion.length)]);
        fetchQuestions();
    }

    function triggerAnswer(value) {
        if (value === currentCorrectAnswer) {
            score++;
            setTotal_count(total_count + 1);
            setCorrectScore(score);
        } else {
            setTotal_count(total_count + 1);
        }
        nextQuestion();
    }


    return (
        <div className={"container"}>
            <div className={"question"}>
                <h1>{currentQuestion}</h1>
            </div>
            <div className={"answers"}>
                <button className={"buttonQCM"} onClick={ () => triggerAnswer(currentAnswers[0])}>{currentAnswers[0]}</button>
                <button className={"buttonQCM"} onClick={ () => triggerAnswer(currentAnswers[1])}>{currentAnswers[1]}</button>
                <button className={"buttonQCM"} onClick={ () => triggerAnswer(currentAnswers[2])}>{currentAnswers[2]}</button>
                <button className={"buttonQCM"} onClick={ () => triggerAnswer(currentAnswers[3])}>{currentAnswers[3]}</button>
            </div>
            <div className={"score"}>
                <h1>Score: {correctScore} / {total_count}</h1>
            </div>
        </div>
    );
}