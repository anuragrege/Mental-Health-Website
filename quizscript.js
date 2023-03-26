function check() {
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;
  var q9 = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  let totalScore = 0;
  const correctAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

      switch (q1) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }



      switch (q2) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }




      switch (q3) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }





      switch (q4) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }





      switch (q5) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }



      switch (q6) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }




      switch (q7) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }





      switch (q8) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }




      switch (q9) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }




      switch (q10) {
        case "Always":
          totalScore += 40;
          break;
        case "Often":
          totalScore += 30;
          break;
        case "Sometimes":
          totalScore += 20;
          break;
        case "Never":
          totalScore += 10;
          break;
      }
    


  if (totalScore === 0) {
    result.textContent = "Please attempt the test.";
  } else if (totalScore >= 200 ) {
    result.textContent = "The tests indicate that you might not have a good mental health. Please seek professional help. Please go to the HOME page to contact the professional experts.";
  } else if ((totalScore < 200) && (totalScore>120)) {
    result.textContent = "The tests indicate that you might have a mildly disturbed mental state. You may seek professional help through our HOME page.";
  } else if (totalScore <= 120) {
    result.textContent = "The tests indicate that you are mentally healthy. Stay happy! ";
  } 
  
}
