import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';

function renderQuestion() {
  const question = questions[currentNumber];
  // 해당 문제 번호
  numberEl.innerHTML = question.number;
  // 질문
  questionEl.innerHTML = question.question;
  // 대답 1번
  choice1El.innerHTML = question.choices[0].text;
  // 대답 2번
  choice2El.innerHTML = question.choices[1].text;
  // 프로세스 바 게이지 증가 
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'; 
}
function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }
  const question = questions[currentNumber];
  //ex) mbti = '' + 'i' > mbti = 'i' + 'n' > mbti = 'in' + 'f' > mbti = 'inf' + 'j' > mbti ='infj' 
  mbti = mbti + question.choices[choiceNumber].value;
  currentNumber = currentNumber + 1 ;
  renderQuestion();
}

function showResultPage() {
  location.href = '/results.html?mbti=' + mbti; //쿼리스트링
}

choice1El.addEventListener('click' , function() {
  nextQuestion(0);
});
choice2El.addEventListener('click' , function() {
  nextQuestion(1);
});

renderQuestion();