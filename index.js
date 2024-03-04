// EXAMPLE 1 - Format a Date as YYYY-MM-DD hh:mm:ss in JavaScript

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

// 👇️ 2023-01-04 10:00:07
console.log(formatDate(new Date()));

//  👇️️ 2025-05-04 05:24:07
console.log(formatDate(new Date('May 04, 2025 05:24:07')));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Format a Date as MM/DD/YYYY hh:mm:ss in JavaScript

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return (
//     [
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//       date.getFullYear(),
//     ].join('/') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// // 👇️ 07/24/2023 16:11:58 (MM/DD/YYYY hh:mm:ss)
// console.log(formatDate(new Date()));

// //  👇️️ 05/04/2025 05:24:07 (MM/DD/YYYY hh:mm:ss)
// console.log(formatDate(new Date('May 04, 2025 05:24:07')));
