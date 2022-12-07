import { useState } from "react";
import { useEffect } from "react";
import Form from "./form";
import Question from "./question";
const QuizApp = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>{!quizStarted ? <Form /> : <Question />}</div>;
};

export default QuizApp;
