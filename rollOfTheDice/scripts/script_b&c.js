const quizForm = document.getElementById('quiz-form');
const questionContainer = document.getElementById('question-container');
const quizResult = document.getElementById('quiz-result');

const questions = [
    {
        question: "Which cheating technique involves placing a low denomination chip beneath a higher value chip on a roulette table?\n",
        answer: "savannah"
    },
    {
        question: "Who is known for developing the 'monkey paw' or 'slider' to cheat slot machines?\n",
        answer: "tommy glenn carmichael"
    },
    {
        question: "What was the nickname of the 1960s gambler Ida Summers, known for her hand-mucking techniques?\n",
        answer: "vegas vixen"
    },
    {
        question: "Who won over $1 million from the roulette tables with a radio receiver in the ball in 1973?\n",
        answer: "monique laurent"
    },
    {
        question: "Who created counterfeit slot machine coins, leading to his arrest in 1998?\n",
        answer: "louis colavecchio"
    },
    {
        question: "What is the name of the notorious slot machine cheater who made over $15 million with his crew?\n",
        answer: "dennis nikrasch"
    },
    {
        question: "Who pulled off a casino heist at the Stardust Hotel and Casino in 1992 and disappeared with half a million dollars?\n",
        answer: "bill brennan"
    },
    {
        question: "Which Nevada Gaming Control Board employee was caught modifying slot machine software for personal gain?\n",
        answer: "ron harris"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <label for="question">${question.question}</label>
        <input type="text" id="question" name="question" autocomplete="off">
    `;
}

displayQuestion();

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('question').value.toLowerCase();
    const isCorrect = userAnswer === questions[currentQuestionIndex].answer.toLowerCase();
    
    quizResult.textContent = isCorrect ? 'Correct answer!' : 'Incorrect answer. Try again!';
    quizResult.style.color = isCorrect ? 'green' : 'red';
    
    if (isCorrect && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

