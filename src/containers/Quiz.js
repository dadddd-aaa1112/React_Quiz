import React from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          answers: [
            { text: "вопрос 1" },
            { text: "вопрос 2" },
            { text: "вопрос 3" },
            { text: "вопрос 4" }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>ответьте на вопросы</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
