import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PAGE/Home/Home";
import Quiz from "./PAGE/Quiz/Quiz";
import Result from "./PAGE/Result/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = await res.json();
    setQuestions(data.results);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/ques1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                setScore={setScore} // Make sure you pass this too
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={<Result name={name} score={score} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
