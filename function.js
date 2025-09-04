const questions = [
  {
    id: 1,
    question: "Was ist die Haupstadt von Deutschland?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Stuttgart",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Haupstadt von Frankreich?",
    answers: [
      {
        id: "a",
        text: "Lyon",
        correct: false,
      },
      {
        id: "b",
        text: "Paris",
        correct: true,
      },
      {
        id: "c",
        text: "Marseilles",
        correct: false,
      },
      {
        id: "d",
        text: "Nantes",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Was ist die Haupstadt von England?",
    answers: [
      {
        id: "a",
        text: "Bristol",
        correct: false,
      },
      {
        id: "b",
        text: "London",
        correct: true,
      },
      {
        id: "c",
        text: "Manchester",
        correct: false,
      },
      {
        id: "d",
        text: "Leeds",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Was ist die Haupstadt von Tschechien",
    answers: [
      {
        id: "a",
        text: "Pilzen",
        correct: false,
      },
      {
        id: "b",
        text: "Prag",
        correct: true,
      },
      {
        id: "c",
        text: "Liberec",
        correct: false,
      },
      {
        id: "d",
        text: "Karlsbad",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Was ist die Haupstadt der Spanien?",
    answers: [
      {
        id: "a",
        text: "Barcelona",
        correct: false,
      },
      {
        id: "b",
        text: "Madrid",
        correct: true,
      },
      {
        id: "c",
        text: "Valencia",
        correct: false,
      },
      {
        id: "d",
        text: "Sevilla",
        correct: false,
      },
    ],
  },
];

let currentQuestion = questions[0];
let currentQuestionPointer = 0;

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionDiv.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  const answersCopy = [];
  question.answers.forEach((answer) => {
    answersCopy.push(answer);
  });

  while (answersCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * answersCopy.length);

    const answer = answersCopy.splice(randomPointer, 1)[0];

    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    answerDiv.classList.add("answer");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  }

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);

  document.getElementById("display-question").appendChild(questionDiv);
}

function nextQuestion(question) {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }

  renderQuestion(currentQuestion);
}

function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("Richtig");
    document.getElementById(answerId).classList.add("correct");
  } else {
    alert("Falsch");
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add("correct");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
}
renderQuestion(currentQuestion);
