// // NUMBER (26 april)
// // TASK-1
// let existsUserLogin = "the_best_user";
// let existsUserPassword = "12345678";


// let userLogin = prompt("Enter login");
// userLogin = existsUserLogin.trim();

// let userPassword = prompt("Enter password");
// userPassword = existsUserLogin.trim();

// if (userLogin === existsUserLogin || userPassword = existsUserLogin){
//   alert('Welcome, userLogin!')
// }else {
//   alert ('Login and (or) Password entered incorrectly')
// };


// //TASK-2

// let i = 0;


// while (i <3){
//   let newStudent = prompt('Enter the name of the new student!');
//   newStudent = newStudent.trim();
//   alert(`Welcome ${newStudent}!`);
//    i +=1;
// }


// //TASK-3
// let i = 0;

// do{
//     let newStudent = prompt('Enter the name of the new student!');
//     newStudent = newStudent.trim();
//     alert(`Welcome ${newStudent}!`);
//      i +=1
//   }
// while (i<3);


// let sum = 0
// for (let i = 0; i<=100; i++){
//   sum += i
// }

// alert(sum);



// //TASK-4
// let correctAnswers = 0;
// let incorrectAnswers = 0;

// // Question 1
// let answer1 = parseInt(prompt("What's 2 + 2?"));
// if (answer1 === 4) {
//   alert("Correct answer");
//   correctAnswers++;
// } else {
//   alert("Incorrect answer");
//   incorrectAnswers++;
// }


// // Question 2
// let answer2 = parseInt(prompt("How much will 2 * 2 be?"));
// if (answer2 === 4) {
//   alert("Correct answer");
//   correctAnswers++;
// } else {
//   alert("Incorrect answer");
//   incorrectAnswers++;
// }

// // Question 3
// let answer3 = parseInt(prompt("Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?"));
// if (answer3 === 1) {
//   alert("Correct answer");
//   correctAnswers++;
// } else {
//   alert("Incorrect answer");
//   incorrectAnswers++;
// }

// // Question 4
// let answer4 = parseInt(prompt("Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. How many sweets did Masha have left in the end?"));
// if (answer4 === 12) {
//   alert("Correct answer");
//   correctAnswers++;
// } else {
//   alert("Incorrect answer");
//   incorrectAnswers++;
// }

// // Question 5
// let answer5 = parseInt(prompt("What is 2 + 2 * 2?"));
// if (answer5 === 6) {
//   alert("Correct answer");
//   correctAnswers++;
// } else {
//   alert("Incorrect answer");
//   incorrectAnswers++;
// }

// // Display total correct and incorrect answers
// alert(`End of test! Correct answers - ${correctAnswers}; Wrong answers - ${incorrectAnswers}.`);


// //TASK-5
// let clientName= "Igor";
// let clientSpentForAllTime =110;
// let clientSpentToday = 25;
// let discount = 0;

// if (100<=clientSpentForAllTime && clientSpentForAllTime<300) {
//   discount = 0.1;
//   alert(`You are given a discount in ${discount*100} %!`);
// } else if (300<=clientSpentForAllTime && clientSpentForAllTime<500){
//   discount = 100*0.2;
//   alert(`You are given a discount in ${discount*100} %!`);
// }else if(500<=clientSpentForAllTime){
//   discount = 100*0.3;
//   alert(`You are given a discount in ${discount*100}%!`);
// }

// let discountAmount = clientSpentToday - clientSpentToday*discount
// clientSpentForAllTime += clientSpentToday;
// alert (`Thank you, ${clientName}! Payable ${discountAmount}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)


//TASK-6

  // let clientName= prompt("Enter the client's name");
  // let clientSpentForAllTime = prompt("How much did the client spend all time?");
  // let clientSpentToday = prompt("How much did the client spend today?");
  // let discount = 0;


  // if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
  //   alert("The amount that the client spent all time and spent today must be a number! Please reload the page to try again")
  // }else {
  //   if (100<=clientSpentForAllTime && clientSpentForAllTime<300) {
  //     discount = 0.1;
  //     alert(`You are given a discount in ${discount*100} %!`);
  //   } else if (300<=clientSpentForAllTime && clientSpentForAllTime<500){
  //     discount = 0.2;
  //     alert(`You are given a discount in ${discount*100} %!`);
  //   }else if(500<=clientSpentForAllTime){
  //     discount = 0.3;
  //     alert(`You are given a discount in ${discount*100}%!`);
  //   }
  //     let discountAmount = clientSpentToday - clientSpentToday*discount
  //     clientSpentForAllTime = Number(clientSpentForAllTime) + Number(clientSpentToday);
  //     alert(`Thank you, ${clientName}! Payable ${discountAmount}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)
  // }

