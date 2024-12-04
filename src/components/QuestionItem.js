import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleCorrectAnswerChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    onUpdate(id, newIndex);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="text-lg font-semibold">Question {id}</h3>
      <p className="my-2">Prompt: {prompt}</p>
      <div className="my-2">
        <label htmlFor={`correct-answer-${id}`} className="mr-2">
          Correct Answer:
        </label>
        <select
          id={`correct-answer-${id}`}
          value={correctIndex}
          onChange={handleCorrectAnswerChange}
          className="p-1 border rounded"
        >
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Question
      </button>
    </div>
  );
}

export default QuestionItem;

   

