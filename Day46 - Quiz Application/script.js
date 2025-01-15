const quizData = [
    {
      "question": "What is the name of the powerful ancient beings who granted Surgebinding abilities?",
      "a": "Heralds",
      "b": "Spren",
      "c": "Unmade",
      "d": "Knights Radiant",
      "correct": "b"
    },
    {
      "question": "Who is the primary protagonist of the first book, *The Way of Kings*?",
      "a": "Kaladin",
      "b": "Dalinar",
      "c": "Shallan",
      "d": "Szeth",
      "correct": "a"
    },
    {
      "question": "What is the name of the magical metal that can cut through anything?",
      "a": "Shardplate",
      "b": "Honorblade",
      "c": "Shardblade",
      "d": "Soulcaster",
      "correct": "c"
    },
    {
      "question": "Which order of Knights Radiant is known for their healing and protection abilities?",
      "a": "Windrunners",
      "b": "Lightweavers",
      "c": "Truthwatchers",
      "d": "Edgedancers",
      "correct": "d"
    },
    {
      "question": "What is the name of the mysterious ancient city where much of *Words of Radiance* takes place?",
      "a": "Urithiru",
      "b": "Kharbranth",
      "c": "Shinovar",
      "d": "Narak",
      "correct": "a"
    },
    {
      "question": "Which of the following is NOT a Surge associated with Surgebinding?",
      "a": "Illumination",
      "b": "Transformation",
      "c": "Abrasion",
      "d": "Combustion",
      "correct": "d"
    },
    {
      "question": "What is the name of Kaladin’s spren?",
      "a": "Sylphrena",
      "b": "Pattern",
      "c": "Stormfather",
      "d": "Wyndle",
      "correct": "a"
    },
    {
      "question": "Which character bears the title of 'Truthless of Shinovar'?",
      "a": "Kaladin",
      "b": "Dalinar",
      "c": "Szeth",
      "d": "Taravangian",
      "correct": "c"
    },
    {
      "question": "What is the name of Shallan’s family’s estate?",
      "a": "Kholinar",
      "b": "Jah Keved",
      "c": "Urithiru",
      "d": "Davars",
      "correct": "d"
    },
    {
      "question": "Who is the author of *The Way of Kings*?",
      "a": "Patrick Rothfuss",
      "b": "Brandon Sanderson",
      "c": "George R.R. Martin",
      "d": "Robert Jordan",
      "correct": "b"
    }
  ];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            deselectAnswers();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});