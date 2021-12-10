import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = (props) => <li>{props.answer.text}</li>;

export default AnswerItem;
