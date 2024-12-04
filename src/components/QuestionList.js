import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <div>
      <h2>Quiz Questions</h2>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          onDelete={onDeleteQuestion}
          onUpdate={onUpdateQuestion}
        />
      ))}
    </div>
  );
}

export default QuestionList;

