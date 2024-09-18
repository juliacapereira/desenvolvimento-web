const quizData = [
    {
        question: "Qual o nome do terceiro livro/filme da saga?",
        options: ["Harry Potter e a ordem da fênix", "Harry Potter e o prisioneiro de azkaban", "Harry Potter e as relíquias da morte", "Harry Potter e o cálice de fogo"],
        answer: "Harry Potter e o prisioneiro de azkaban"
    },
    {
        question: "Qual o nome da mãe de Harry Potter?",
        options: ["Fleur", "Luna", "Minerva", "Lilian"],
        answer: "Lilian"
    },
    {
        question: "De quem era o rato que some na viagem até Hogwarts no primeiro filme?",
        options: ["Neville","Ron","Draco","Fred"],
        answer: "Neville"
    },
    {
        question: "Qual a primeira horcrux a ser destruída?",
        options: ["O diário de Tom Riddle", "O anel de Peverell", "O Medalhão de Sonserina", "A taça da Lufa-Lufa"],
        answer: "O diário de Tom Riddle"
    },
    {
        question: "Qual o patrono do personagem Harry Potter?",
        options: ["Lontra", "Pássaro", "Gato", "Cervo"],
        answer: "Cervo"
    },
    {
        question: "O que aparece para Ron Weasley quando é ensinado o feitiço do patrono?",
        options: ["Dragão", "Lobisomem", "Aranha", "Voldemort"],
        answer: "Aranha"
    }
];

const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("enviar");
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz completo!</h1>
      <p>Você acertou: ${score}/${quizData.length}</p>
    `;
  }
  showQuestion();