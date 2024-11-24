import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqQuestions = [
  {
    question: "What is Nota?",
    answer: "Nota is a simple task manager. created by Abdullah ",
  },
  {
    question: "Who is Nota for?",
    answer: "Anyone who needs to stay organized.",
  },
  
  {
    question: "Is Nota free?",
    answer: "Yes, Nota is 100% free to use.",
  },
  {
    question: "Do I need to create an account to use Nota?",
    answer: "No, you can use Nota without creating an account.",
  },
];

function Faq() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      <Header />
      <div className="container faq-container">
        <div className="faq-content">
          <p className="page-name">FAQs</p>
          <h1>Frequently asked questions</h1>
          <p className="faq-p">have a questiion? We're here to help.</p>

          <div className="faq-questions">
            {faqQuestions.map((el, i) => {
              return (
                <FaQItem
                  item={el}
                  num={i}
                  curOpen={curOpen}
                  setCurOpen={setCurOpen}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

function FaQItem({ item, num, curOpen, setCurOpen }) {
  const isOpen = num === curOpen;
  function onOpen() {
    setCurOpen(isOpen ? null : num);
  }
  return (
    <div>
      <p className="faq-question" onClick={onOpen}>
        <span>{item.question} </span>
        <span>
          {isOpen? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </p>
      {isOpen && <p className="faq-answer">{item.answer}</p>}
    </div>
  );
}

export default Faq;
