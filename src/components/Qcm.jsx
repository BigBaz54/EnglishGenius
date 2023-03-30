import React, {useEffect, useState} from "react";

// Components


// Styles
import "../styles/Qcm.css";

export default function QCM() {
    // Script
    const [correctScore, setCorrectScore] = useState(0);
    const [total_count, setTotal_count] = useState(0);

    // Fetch questions
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState("no question");
    const [currentAnswers, setCurrentAnswers] = useState(["answer1", "answer2", "answer3", "answer4"]);
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("answer1");

    useEffect(() => {
        fetch("/api/easy")
            .then(response => response.json())
            .then(data => setQuestions(data) )
            .catch(error => console.error(error));
        nextQuestion();
    }, []);

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
            let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            setCurrentQuestion(randomQuestion.question);
            setCurrentCorrectAnswer(randomQuestion.correctAnswer);
            let answers = [];
            answers.push(randomQuestion.correctAnswer);
            for (let i = 0; i < randomQuestion.incorrectAnswers.length; i++) {
                answers.push(randomQuestion.incorrectAnswers[i]);
            }
            setCurrentAnswers(shuffle(answers));
        }
    }

    function triggerAnswer(value) {
        if (value === currentCorrectAnswer) {
            setCorrectScore(correctScore + 1);
            setTotal_count(total_count + 1);
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