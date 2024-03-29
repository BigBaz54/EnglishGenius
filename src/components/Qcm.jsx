import React, {useEffect, useState} from "react";
import confetti from "https://esm.run/canvas-confetti@1";
// Components


// Styles
import "../styles/Qcm.css";

export default function QCM(props) {

    // Fetch questions
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentAnswers, setCurrentAnswers] = useState(null);
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(null);

    
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await fetch("/api/"+props.topic)
            const data = await res.json();
            const randomQuestion = data[Math.floor(Math.random() * data.length)];
            const answers = [];
            answers.push(randomQuestion.correctAnswer);
            for (const element of randomQuestion.incorrectAnswers) {
                answers.push(element);
            }
            setQuestions(data);
            setCurrentQuestion(randomQuestion.question);
            setCurrentCorrectAnswer(randomQuestion.correctAnswer);
            setCurrentAnswers(shuffle(answers));
        }
        fetchAPI();
    }, [props.topic]);

    function shuffle(list) {
        let currentIndex = list.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = list[currentIndex];
            list[currentIndex] = list[randomIndex];
            list[randomIndex] = temporaryValue;
        }
        return list;
    }

    function nextQuestion() {
        if (questions.length > 0) {
            document.getElementById("nextQuestionButton").style.display = "none";
            for (const element of document.getElementsByClassName("buttonQCM")) {
                element.className = "buttonQCM";
                element.disabled = false;
            }
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            setCurrentQuestion(randomQuestion.question);
            setCurrentCorrectAnswer(randomQuestion.correctAnswer);
            const answers = [];
            answers.push(randomQuestion.correctAnswer);
            for (const element of randomQuestion.incorrectAnswers) {
                answers.push(element);
            }
            setCurrentAnswers(shuffle(answers));
        }
    }

    function triggerAnswer(value) {
        if (value === currentCorrectAnswer) {
            confetti({
                particleCount: 100,
                spread: 1000
            });
            props.incrementScore();
        }
        props.incrementTotal();
        for (const element of document.getElementsByClassName("buttonQCM")) {
            if (element.innerText === value) {
                    element.classList.add("correctGuess");
                } else {
                    element.classList.add("incorrectGuess");
                }
        }
        showCorrentAnswer();
    }

    function showCorrentAnswer() {
        for (const element of document.getElementsByClassName("buttonQCM")) {
            if (element.innerText === currentCorrectAnswer) {
                element.classList.add("correctAnswer");
            } else {
                element.classList.add("incorrectAnswer");
            }
            element.disabled = true;
            document.getElementById("nextQuestionButton").style.display = "block";
        }
    }

    if (!questions) {
        return <h1>Loading...</h1>
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
            <div className="nextQuestion">
                <button id={"nextQuestionButton"} className={"nextQuestionButton"} onClick={() => nextQuestion()}>Next</button>
            </div>
            <div className={"score"}>
                <h1>Score: {props.score} / {props.total}</h1>
            </div>
        </div>
    );
}