// // OBJECTS
// // TASK-1 
// const users = [
//   {
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, 
//   {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   },
//   {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }
// ];


// function filterOnlineUsers(user) {
//   return user.status === 'online';
// }
// const onlineUsers = users.filter(filterOnlineUsers);

// function getUserNames(user) {
//   return user.username;
// }
// const usersOnlineNames = onlineUsers.map(getUserNames).join(', ');


// alert(`The following users are online now: ${usersOnlineNames}`);

//Task-2

// function giveJobToStudent(student, jobName) {
// const fullName = student.fullName;
// const newStudent = { ...student, job: jobName };
// const message = `Congratulations! ${fullName} has a new job! It is now ${jobName}`;
// alert (message);
// return newStudent;
// }

// const student = {
// fullName: 'Maxim',
// experienceInMonths: 12,
// stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// };

// const updatedStudent = giveJobToStudent(student, 'web developer');


// //DATE (27-april)
// //TASK-1

// function getDateFormat(date, separator = '.') {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = String(date.getFullYear());

//   if (separator === '-') {
//     return `${day}-${month}-${year}`;
//   }

//   return `${day}.${month}.${year}`;
//}


// function getDaysBeforeBirthday(nextBirthdayDate) {
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const nextBirthday = new Date(currentYear, nextBirthdayDate.getMonth(), nextBirthdayDate.getDate());
//   if (nextBirthday < today) {
//     nextBirthday.setFullYear(currentYear + 1);
//   }
//   const timeDiff = nextBirthday.getTime() - today.getTime();
//   const daysDiff = convertMsToDays(timeDiff);
//   return daysDiff;
// }

// function convertMsToDays(ms) {
//   const oneDayMs = 1000 * 60 * 60 * 24;
//   const days = Math.round(ms / oneDayMs);
//   return days;
// }
