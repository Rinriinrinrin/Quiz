const quiz = [
  {
    question: '小売業者は、顧客にチェックアウト時にメールアドレスを入力してプロモーションメールを受信するように依頼することにより、店舗でメールアドレスを収集しています。これらのアドレスに送信すると、多くは有効ではないためバウンスします。マーケティングチームは、これに対処するための買収戦略を実装したいと考えています。どの戦略を使用する必要がありますか？',
    answers: [ 'Double Opt-In', 'Website Signups', 'List Detective', 'Single Opt-In'],
    correct: 'Double Opt-In'
  }, {
    question: '小売業者がストアでメールアドレスを収集して、顧客にチェックアウト時にメールアドレスを入力してプロモーションメールを受信するように依頼しました。これらのアドレスに何度も送信すると、有効ではないため、マーケティングチームはこれに対処するための獲得戦略を実装したいと考えています。戦略を使用する必要があります。',
    answers: [ 'website sign on', 'list detectives', 'single opt in', 'double opt in'],
    correct: 'double opt in'
  }, {
    question: '潜在的でアクティブなサブスクライバーと対話するためのベストプラクティスは？',
    answers: [ 'CAN SPAM法に従う', '必ずメールのオプトインを必須にする', '登録解除を簡単にする', '提供されたメールアドレスのみを使用'],
    correct: 'CAN SPAM法に従う'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  //クイズの回数を1＋
  quizCount++;
  //問題数と回答数のカウントを一致させる
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
