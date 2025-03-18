const questions = [
      {
          question: "Which is larget animal in the world?",
          answers: [
              { text: "Shark", correct: false},
              { text: "Blue whale", correct: true},
              { text: "Elephant", correct: false},
              { text: "Giraffe", correct: false},
          ]
      },
      {
          question: "Which is the smallest country in the world?",
          answers: [
              { text: "Vatican City", correct: true},
              { text: "Bhutan", correct: false},
              { text: "Nepal", correct: false},
              { text: "Shri Lanka", correct: false},
          ]
      },
      {
          question: "Which is the largest desert in the world?",
          answers: [
              { text: "Kalahari", correct: false},
              { text: "Gobi", correct: false},
              { text: "Sahara", correct: false},
              { text: "Antarctica", correct: true},
          ]
      },
      {
          question: "Which is the smallest continent in the world?",
          answers: [
              { text: "Asia", correct: false},
              { text: "Australia", correct: true},
              { text: "Arctic", correct: false},
              { text: "Africa", correct: false},
          ]
      }  
  ];
  

  const question = document.getElementById('question');
  const answersElement = document.getElementById('answer')
  const nextbtn = document.getElementById('next-btn')

let currentquestionINdex = 0;
let score = 0;
const reset = () =>{
      nextbtn.style.display = "none";
      while (answersElement.firstChild) {
            answersElement.removeChild(answersElement.firstChild);
      }
}



const showQuestion = () =>{
      reset();
      let current_question = questions[currentquestionINdex];
      let qno = currentquestionINdex+1;
      question.innerHTML = qno+'.'+current_question.question
     

     current_question.answers.forEach(ans =>{
      const button = document.createElement('button');
      button.innerHTML = ans.text;
      button.classList.add('btn');
      answersElement.appendChild(button);
       if (ans.correct) {
            button.dataset.correct = ans.correct
       }
      button.addEventListener('click',chooseans)
      
     })
      
     
      
      
}

const chooseans = (e) =>{
const selectBtn = e.target;
const iscorrect = selectBtn.dataset.correct ==='true';
if (iscorrect) {
    selectBtn.classList.add('correct')  
    score++;
}
else
{
      selectBtn.classList.add("incorrect");
}

Array.from(answersElement.children).forEach(btn =>{
      if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
      }
      btn.disabled=true;
})
nextbtn.style.display="block"

}





  const startQuiz = () =>{
      currentquestionINdex =0;
      score = 0;
      nextbtn.innerHTML = "Next";
      showQuestion()
  }
  const showscore =() =>{
      reset();
      question.innerHTML `your scored ${score} out of ${questions.length}`
       nextbtn.innerHTML = "play again";
       nextbtn.style.display = 'block'
  }

  const handelNextBtn =() =>{
      currentquestionINdex++;
      if(currentquestionINdex<questions.length){
           showQuestion();

      }
      else{
            showscore();
      }
  }

  nextbtn.addEventListener('click',() =>{
      if(currentquestionINdex<questions.length){
            handelNextBtn();
      }
      else{
            startQuiz();
      }
  })
  startQuiz()

  