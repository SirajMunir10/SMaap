import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../../styles/FAQ.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const socket = io("http://localhost:8081");

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    socket.emit("get_faqs");
    socket.on("faqs", (data) => setFaqs(data));

    return () => {
      socket.off("faqs");
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
