import { useState } from "react";
import "./styles.css";

const Cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntaxe we use to describe a ui in React ?",
    answer: "JSX",
  },

  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },

  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completly synchronised with state ?",
    answer: "Controlled element",
  },
];

export default function App() {
  return <FlaschCards />;
}

function FlaschCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    /// 8832
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="cards-container">
      {Cards.map((obj) => {
        return (
          <div
            key={obj.id}
            className={obj.id === selectedId ? "selected" : ""}
            onClick={function () {
              return handleClick(obj.id);
            }}
          >
            <p>{obj.id === selectedId ? obj.answer : obj.question}</p>
          </div>
        );
      })}
    </div>
  );
}
