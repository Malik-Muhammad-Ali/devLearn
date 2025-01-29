import React, { useState } from "react";

const FAQSection = () => {
  const FAQS = [
    {
      question: "How does DevLearn generate personalized quizzes?",
      answer:
        "DevLearn uses AI to analyze your learning preferences and skill level, then generates customized quizzes to help you improve in specific areas.",
    },
    {
      question: "What happens after I complete a quiz?",
      answer:
        "After completing a quiz, you’ll receive a detailed performance report. If your score is low in certain areas, MindMorph provides targeted resources to help you improve.",
    },
    {
      question: "Can I track my progress over time?",
      answer:
        "Yes! DevLearn keeps a record of your quiz performance, allowing you to track your improvement and see your learning journey unfold.",
    },
    {
      question: "Is DevLearn free to use?",
      answer:
        "DevLearn offers both free and premium features. You can take quizzes for free, but advanced analytics and premium learning resources require a subscription.",
    },
    {
      question: "What topics can I find quizzes on?",
      answer:
        "MindMorph covers a wide range of subjects, including programming, data science, business, and more. You can explore quizzes tailored to your interests and career goals.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Get Answers to Your Learning Queries Instantly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {/* Array of FAQs */}
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    openFAQ === index ? "block" : "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
