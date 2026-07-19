const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "script",
    option2: "javascript",
    option3: "js",
    correctOption: "script",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "The head section",
    option2: "The body section",
    option3: "Both the head and body section are correct",
    correctOption: "Both the head and body section are correct",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    option1: "script href=xxx.js",
    option2: "script name=xxx.js",
    option3: "script src=xxx.js",
    correctOption: "script src=xxx.js",
  },
];

//   3   3
let num = 0;

let score = 0;

// checking right ans

const checkRight = () => {
  let options = document.getElementsByName("option");
  // console.log(questions[num].correctOption);
  options.forEach((option) => {
    console.log(option.checked);
    if (option.checked) {
      let selectedOpt = option.nextSibling.nextSibling.innerText;

    //   console.log(selectedOpt);
      console.log(selectedOpt, questions[num].correctOption);
      if (selectedOpt == questions[num].correctOption) {
        score++;
      }
    }

    option.checked = false;
  });
};

const showQuestion = () => {
  if (num == questions.length) {
    console.log("quiz end");
    document.write("Quiz ended");
  } else {
    document.querySelector("#question").innerHTML = questions[num].question;

    // options

    let firstOpt = document.querySelector("#option1");
    console.log(firstOpt);
    firstOpt.innerHTML = questions[num].option1;

    let secondOpt = document.querySelector("#option2");
    secondOpt.innerHTML = questions[num].option2;

    let thirdOpt = document.querySelector("#option3");
    thirdOpt.innerHTML = questions[num].option3;

  }
};

showQuestion();

let nextBtn = document.querySelector("#nextQues");

nextBtn.addEventListener("click", () => {
     checkRight();
     num++;    
  showQuestion();
});