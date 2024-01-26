import { useState, Fragment } from "react";
import { useRef } from "react";

const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        <div className="control">
          {clicked ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}{" "}
        </div>
        Q: {question}
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer" dangerouslySetInnerHTML={{ __html: answer }}>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
